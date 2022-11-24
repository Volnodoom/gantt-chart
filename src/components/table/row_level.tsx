import { useRef } from "react";
import { ClientProjectCalendarType } from "types/server.type";
import { STEP } from "utils/const";
import { arrayFromStep, calculateEventLength, findCurrentEventSubLevelIds, makeOneDayStepNumber } from "utils/utils";
import * as S from "./row_level.style";

type RowLevelType = {
  calendarEvent: ClientProjectCalendarType,
  calendarStart: Date,
}

const RowLevel = ({calendarEvent, calendarStart}: RowLevelType) => {
  const repeat = useRef<boolean[]>([]);

  const subIds = findCurrentEventSubLevelIds(calendarEvent);
  const taskCounter = subIds && (subIds as number[]).length > 0 ? subIds.length : 0;

  return(
    <>
      <S.TableData>
        <S.TableDataButton fold />
        <S.TableDataTaskCounter>{taskCounter}</S.TableDataTaskCounter>
        {calendarEvent.title}
      </S.TableData>

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

export default RowLevel;
