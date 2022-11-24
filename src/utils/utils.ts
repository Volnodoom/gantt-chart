import { ClientProjectCalendarType, ServerProjectCalendarType } from "types/server.type";
import { DATE_OPTIONS, LOCAL, ONE_DAY, ONE_DAY_IN_MILLISECONDS, SIX_DAY_IN_MILLISECONDS, STEP, WEEK_IN_MILLISECONDS } from "./const";

const getTopAndSubData = (serverData: ServerProjectCalendarType[], result: ClientProjectCalendarType[] = []) => {
  serverData.forEach(({ sub, ...rest }) => {
    if(sub) {
      let subId: number[] = [];
      sub.forEach((line) => subId.push(line.id));

      result.push({
        id: rest.id,
        title: rest.title,
        periodStart: rest['period_start'],
        periodEnd: rest['period_end'],
        subId,
      });

      getTopAndSubData(sub, result);

    } else {
      result.push({
        id: rest.id,
        title: rest.title,
        periodStart: rest['period_start'],
        periodEnd: rest['period_end'],
        subId: [],
      });
    }
  })

  return result
}

export const adaptServerData = (serverData: ServerProjectCalendarType[]) => getTopAndSubData(serverData);

export const sortStartData = (calendarEvents: ClientProjectCalendarType[]) =>
  calendarEvents
    .map((calendarEvent) => new Date(calendarEvent.periodStart))
    .sort((valueA, valueB) => valueA.valueOf() - valueB.valueOf());

export const makeOneDayStepNumber = (startDate: Date, multiply: number) =>
  new Date(Number(startDate.valueOf() - ONE_DAY_IN_MILLISECONDS + multiply*ONE_DAY_IN_MILLISECONDS))
    .getDate();

export const makeSundayStepString = (startDate: Date, multiply: number) =>
  new Date(Number(startDate.valueOf() + SIX_DAY_IN_MILLISECONDS + multiply*WEEK_IN_MILLISECONDS))
    .toLocaleString(LOCAL, DATE_OPTIONS);

export const makeWeekStepString = (startDate: Date, multiply: number) =>
  new Date(Number(startDate.valueOf() + multiply*WEEK_IN_MILLISECONDS))
    .toLocaleString(LOCAL, DATE_OPTIONS);

export const arrayFromStep = Array.from({length: STEP}, (value, index) => ++index);

export const calculateEventLength = (start :string, end: string) => {
  const startDate = new Date(start).valueOf();
  const endDate = new Date(end).valueOf();
  const difference = endDate - startDate;

  return Math.round(difference/ONE_DAY_IN_MILLISECONDS) + ONE_DAY;
}
