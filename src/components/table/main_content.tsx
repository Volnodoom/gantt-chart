import { useAppDispatch } from "hook/use_app_dispatch";
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { FIRST_EVENT_ID, ONE_DAY, ONE_DAY_IN_MILLISECONDS, STEP } from "utils/const";
import * as S from "./main_content.style"
import * as selector from "store/calendar_data.selector";
import { arrayFromStep, makeOneDayStepNumber } from "utils/utils";
import { ClientProjectCalendarType } from "types/server.type";
import { useRef } from "react";
import RowLevel from "./row_level";

type MainContentProps = {
  calendarStart: Date;
}

const MainContent = ({calendarStart}: MainContentProps) => {
  const dispatch = useAppDispatch();
  const repeat = useRef<boolean[]>([]);

  const calendarEventById = useSelector(selector.getCalendarEventById);
  const allCalendarEvents =  useSelector(selector.getAllCalendarEvents);

  const firstEvent = allCalendarEvents.find((object) => object.id === FIRST_EVENT_ID);


  const hasLevel = (calendarEvent: ClientProjectCalendarType | undefined) => calendarEvent && calendarEvent.subId.length > 0;
  const findEvents = (calendarEvent: ClientProjectCalendarType[] | undefined, allEvents: ClientProjectCalendarType[]) =>
    allEvents.filter((object) =>
      calendarEvent?.subId.forEach(
        (idValue) => idValue ===  object.id)
    );



  const hasLevelTwo = hasLevel(firstEvent);
  const levelTwoEvents = findEvents(firstEvent, allCalendarEvents);

  const hasLevelThree = hasLevel(levelTwoEvents);
  const levelThreeEvents = findEvents(levelTwoEvents, allCalendarEvents);

  const hasLevelFour = hasLevel(levelThreeEvents);
  const levelFourEvents = findEvents(levelThreeEvents, allCalendarEvents);

  const hasLevelFive = hasLevel(levelFourEvents);
  const levelFiveEvents = findEvents(levelFourEvents, allCalendarEvents);


  return(
    <S.TableBody>
      <S.TableRow>
        {
          arrayFromStep.map((valueOne) =>
            arrayFromStep.map((valueTwo) => (
              <S.TableData key={`${valueOne}-${valueTwo}-${valueOne+valueTwo}`}></S.TableData>
            ))
          )
        }
      </S.TableRow>
      {
        firstEvent
        ?
          <S.TableRowLevelOne>
            <RowLevel calendarEvent={firstEvent} calendarStart={calendarStart} />
          </S.TableRowLevelOne>
        :
          ''
      }

      {
        hasLevelTwo && levelTwoEvents
        ?
        <S.TableRowLevelTwo>
          <RowLevel calendarEvent={levelTwoEvents} calendarStart={calendarStart} />
        </S.TableRowLevelTwo>
        :
          ''
      }

      {
        hasLevelThree && levelThreeEvents
        ?
        <S.TableRowLevelThree>
          <RowLevel calendarEvent={levelThreeEvents} calendarStart={calendarStart} />
        </S.TableRowLevelThree>
        :
          ''
      }

      {
        hasLevelFour && levelFourEvents
        ?
        <S.TableRowLevelFour>
          <RowLevel calendarEvent={levelFourEvents} calendarStart={calendarStart} />
        </S.TableRowLevelFour>
        :
          ''
      }


      <S.TableRowLevelFive>
        <S.TableData>
          <S.TableDataTaskCounter>0</S.TableDataTaskCounter>
          Banners for social networks
          </S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
      </S.TableRowLevelFive>
      <S.TableRowLevelFive>
        <S.TableData>
          <S.TableDataTaskCounter>0</S.TableDataTaskCounter>
          Banners for social networks
          </S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
      </S.TableRowLevelFive>
      <S.TableLastRow>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
        <S.TableData></S.TableData>
      </S.TableLastRow>
    </S.TableBody>
  )
}

export default MainContent;
