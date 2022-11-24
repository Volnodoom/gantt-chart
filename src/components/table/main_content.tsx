import { useSelector } from 'react-redux';
import { FIRST_EVENT_ID } from "utils/const";
import * as S from "./main_content.style"
import * as selector from "store/calendar_data.selector";
import RowLevel from "./row_level";
import EmptyRow from "./empty_row";

type MainContentProps = {
  calendarStart: Date;
}

const MainContent = ({calendarStart}: MainContentProps) => {
  const allCalendarEvents =  useSelector(selector.getAllCalendarEvents);

  const levelTwoEvents = useSelector(selector.getCalendarsLevel2);
  const levelThreeEvents = useSelector(selector.getCalendarsLevel3);
  const levelFourEvents = useSelector(selector.getCalendarsLevel4);
  const levelFiveEvents = useSelector(selector.getCalendarsLevel5);

  console.log({levelTwoEvents, levelThreeEvents, levelFourEvents, levelFiveEvents})
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
        <S.TableRowLevelTwo>
          <RowLevel calendarEvent={levelTwoEvents[0]} calendarStart={calendarStart}  key={'qwety'}/>
        </S.TableRowLevelTwo>
        :
        ''
      }

      {
        levelThreeEvents
        ?
        <S.TableRowLevelThree>
          <RowLevel calendarEvent={levelThreeEvents[0]} calendarStart={calendarStart}  key={'qwet'}/>
        </S.TableRowLevelThree>
        :
        ''
      }

      {
        levelFourEvents
        ?
        <S.TableRowLevelFour>
          <RowLevel calendarEvent={levelFourEvents[0]} calendarStart={calendarStart} key={'qwe'}/>
        </S.TableRowLevelFour>
        :
        ''
      }

      {
        levelFiveEvents
        ?
        levelFiveEvents.map((calendarObject) => (
          <S.TableRowLevelFive key={calendarObject.title}>
            <RowLevel calendarEvent={calendarObject} calendarStart={calendarStart} key={calendarObject.title} />
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
