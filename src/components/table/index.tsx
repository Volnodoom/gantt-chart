import { useAppDispatch } from "hook/use_app_dispatch";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { fetchCalendarData } from "store/api_actions";
import * as selector from "store/calendar_data.selector";
import { STEP } from "utils/const";
import { LoadingStatus } from "utils/server.const";
import { arrayFromStep, makeOneDayStepNumber, makeSundayStepString, makeWeekStepString, sortStartData } from "utils/utils";
import MainContent from "./main_content";
import * as S from "./table.style";

const Canvas = () => {
  const dispatch = useAppDispatch();

  const loadingStatus = useSelector(selector.getCalendarStatus);
  const caption = useSelector(selector.getProjectName);
  const period = useSelector(selector.getWholePeriod);
  const allEvents = useSelector(selector.getAllCalendarEvents);

  const isSuccess = loadingStatus === LoadingStatus.Succeeded;

  useEffect(() => {
    dispatch(fetchCalendarData());
  }, [dispatch])

  if(!isSuccess) {
    return(<div></div>)
  }

  const allStartDates = sortStartData(allEvents);

  return(
    <S.Table>
      <S.TableCaption>{caption} / {period}</S.TableCaption>
      <S.TableHead>
        <S.TableHeadRow>
          <S.TableHeadName rowSpan={2}>Work item</S.TableHeadName>
          {
            arrayFromStep
              .map((step, index) => (
                <S.TableHeadMonth colSpan={7} key={`step-number-${step}`}>
                  {makeWeekStepString(allStartDates[0],  index)} - {makeSundayStepString(allStartDates[0],  index)}
                </S.TableHeadMonth>
              ))
          }
        </S.TableHeadRow>
        <S.TableHeadRow>
          {
            arrayFromStep
            .map((currentStep:number, index: number) =>
              arrayFromStep.map((value, subIndex) => {
                return <S.TableHeadSub key={`${currentStep}+${index}+${value}`}>
                  {makeOneDayStepNumber(allStartDates[0], subIndex + index*STEP)}
                </S.TableHeadSub>
              })
            )
          }
        </S.TableHeadRow>
      </S.TableHead>

      <MainContent calendarStart={allStartDates[0]}/>
    </S.Table>
  )
}

export default Canvas;
