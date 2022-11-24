import { memo, useRef } from "react";
import { ClientProjectCalendarType } from "types/server.type";
import { ONE_DAY, STEP } from "utils/const";
import { arrayFromStep, calculateEventLength, makeOneDayStepNumber } from "utils/utils";
import * as S from "./row_level.style";
import RowLevelHead from "./row_level_head";

type RowLevelType = {
  calendarEvent: ClientProjectCalendarType,
  calendarStart: Date,
  noButton?: boolean,
}

const RowLevel = ({calendarEvent, calendarStart, noButton}: RowLevelType) => {
  const repeat = useRef<boolean[]>([]);

  return(
    <>
      <RowLevelHead noButton={noButton} calendarEvent={calendarEvent}/>
      {
        arrayFromStep
        .map((currentStep:number, index: number) =>
          arrayFromStep.map((value, subIndex) => {
            const currentDay = makeOneDayStepNumber(calendarStart, subIndex + index*STEP);
            const start = new Date(calendarEvent.periodStart).getDate();
            const end = new Date(calendarEvent.periodEnd).getDate();

            const isCurrentDayEqualStart = new Date(calendarEvent.periodStart).getDate() === currentDay;
            const isCurrentDayEqualEnd = new Date(calendarEvent.periodEnd).getDate() === currentDay;

            const isFrameBooked = (currentDay >= start) && (currentDay <= end);
            const isNoRepeatBook = repeat.current.length === 0;

            if(isCurrentDayEqualStart && isCurrentDayEqualEnd && isNoRepeatBook) {

              repeat.current.push(true);
              return (
                <S.TableData
                  $activeFrame={calendarEvent.title}
                  colSpan={ONE_DAY}
                  key={calendarEvent.periodStart}
                >
                  <div></div>
                </S.TableData>
              )
            }

            if(isCurrentDayEqualStart && isNoRepeatBook) {
              return (
                <S.TableData
                  $activeFrame={calendarEvent.title}
                  colSpan={calculateEventLength(calendarEvent.periodStart, calendarEvent.periodEnd)}
                  key={calendarEvent.periodStart}
                >
                  <div></div>
                </S.TableData>
              )
            }

            if(isCurrentDayEqualEnd) {
              repeat.current.push(true);
            }

            if(isFrameBooked && isNoRepeatBook) {
              return '';
            }

            return <S.TableData key={`${currentStep}+${index}+${value}`}></S.TableData>
          })
        )
      }

    </>
  )
}

export default memo(RowLevel);
