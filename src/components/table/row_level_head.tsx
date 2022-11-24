import { useSelector } from 'react-redux';
import { useState } from "react";
import { useAppDispatch } from "hook/use_app_dispatch";
import { ClientProjectCalendarType } from "types/server.type";
import { findCurrentEventSubLevelIds, getCalendarCurrentLevel } from "utils/utils";
import * as S from "./row_level.style"
import * as selector from 'store/calendar_data.selector';
import { setFoldedLevel } from 'store/calendar_data';
import { useEffect } from 'react';

type RowLevelHeadType = {
  calendarEvent: ClientProjectCalendarType,
  noButton?: boolean,
}

const RowLevelHead = ({calendarEvent, noButton}: RowLevelHeadType) => {
  const dispatch = useAppDispatch();
  const [isFold, setIsFold] = useState(false);

  const currentFoldElement = useSelector(selector.getFoldedLevel);
  const rowLevel = getCalendarCurrentLevel(calendarEvent);

  const subIds = findCurrentEventSubLevelIds(calendarEvent);
  const taskCounter = subIds && (subIds as number[]).length > 0 ? subIds.length : 0;

  const handleButtonClick = () => {
    if(currentFoldElement === rowLevel) {
      dispatch(setFoldedLevel(null));
    } else {
      dispatch(setFoldedLevel(rowLevel));
    }
  }

  useEffect(() => {
    if(currentFoldElement === rowLevel) {
      setIsFold(true);
    } else {
      setIsFold(false);
    }
  }, [currentFoldElement, rowLevel]);

  return (
    <S.TableData>
      {
        noButton ? '' : <S.TableDataButton fold={isFold} onClick={handleButtonClick} type="button"/>
      }
      <S.TableDataTaskCounter>{taskCounter}</S.TableDataTaskCounter>
      {calendarEvent.title}
    </S.TableData>
  )
}

export default RowLevelHead;
