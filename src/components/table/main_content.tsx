import { useSelector } from 'react-redux';
import { CalendarLevels, FIRST_EVENT_ID } from "utils/const";
import * as S from "./main_content.style"
import * as selector from "store/calendar_data.selector";
import RowLevel from "./row_level";
import EmptyRow from "./empty_row";
import { useState } from 'react';
import { useEffect } from 'react';

type MainContentProps = {
  calendarStart: Date;
}

const MainContent = ({calendarStart}: MainContentProps) => {
  const allCalendarEvents =  useSelector(selector.getAllCalendarEvents);
  const levelTwoEvents = useSelector(selector.getCalendarsLevel2);
  const levelThreeEvents = useSelector(selector.getCalendarsLevel3);
  const levelFourEvents = useSelector(selector.getCalendarsLevel4);
  const levelFiveEvents = useSelector(selector.getCalendarsLevel5);
  const currentFoldState = useSelector(selector.getFoldedLevel);

  const [isLevel2Folded, setIsLevel2Folded] = useState(false);
  const [isLevel3Folded, setIsLevel3Folded] = useState(false);
  const [isLevel4Folded, setIsLevel4Folded] = useState(false);
  const [isLevel5Folded, setIsLevel5Folded] = useState(false);

  useEffect(() => {
    const setFoldState = (lvl2: boolean, lvl3: boolean, lvl4: boolean, lvl5: boolean) => {
      setIsLevel2Folded(lvl2);
      setIsLevel3Folded(lvl3);
      setIsLevel4Folded(lvl4);
      setIsLevel5Folded(lvl5);
    }

    if(currentFoldState === CalendarLevels.level2) {
      setFoldState(true, true, true, true);
    }

    if(currentFoldState === CalendarLevels.level3) {
      setFoldState(false, true, true, true);

    }

    if(currentFoldState === CalendarLevels.level4) {
      setFoldState(false, false, true, true);

    }

    if(currentFoldState === CalendarLevels.level5) {
      setFoldState(false, false, false, true);
    }

    if(currentFoldState === null) {
      setFoldState(false, false, false, false);
    }
  }, [currentFoldState])


  const firstEvent = allCalendarEvents.filter((object) => object.id === FIRST_EVENT_ID);

  return(
    <S.TableBody>
      <EmptyRow />
      {
        firstEvent.length > 0
        ?
        <S.TableRowLevelOne>
          <RowLevel calendarEvent={firstEvent[0]} calendarStart={calendarStart}  key={'qwevc'}/>
        </S.TableRowLevelOne>
        :
        ''
      }

      {
        levelTwoEvents
        ?
        <S.TableRowLevelTwo $isContentHidden={isLevel2Folded}>
          <RowLevel calendarEvent={levelTwoEvents[0]} calendarStart={calendarStart}  key={'qwety'}/>
        </S.TableRowLevelTwo>
        :
        ''
      }

      {
        levelThreeEvents
        ?
        <S.TableRowLevelThree $isContentHidden={isLevel3Folded}>
          <RowLevel calendarEvent={levelThreeEvents[0]} calendarStart={calendarStart}  key={'qwet'}/>
        </S.TableRowLevelThree>
        :
        ''
      }

      {
        levelFourEvents
        ?
        <S.TableRowLevelFour $isContentHidden={isLevel4Folded}>
          <RowLevel calendarEvent={levelFourEvents[0]} calendarStart={calendarStart} key={'qwe'}/>
        </S.TableRowLevelFour>
        :
        ''
      }

      {
        levelFiveEvents
        ?
        levelFiveEvents.map((calendarObject) => (
          <S.TableRowLevelFive $isContentHidden={isLevel5Folded} key={calendarObject.title}>
            <RowLevel
              calendarEvent={calendarObject}
              calendarStart={calendarStart}
              noButton
              key={calendarObject.title}
            />
          </S.TableRowLevelFive>
        ))
        :
        ''
      }
      <EmptyRow isLastRow/>
    </S.TableBody>
  )
}

export default MainContent;
