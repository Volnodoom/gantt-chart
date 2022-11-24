import { ClientProjectCalendarType, ServerProjectCalendarType } from "types/server.type";
import { CalendarLevels, DATE_OPTIONS, LOCAL, ONE_DAY, ONE_DAY_IN_MILLISECONDS, SIX_DAY_IN_MILLISECONDS, START, STEP, WEEK_IN_MILLISECONDS } from "./const";

const getTopAndSubData = (serverData: ServerProjectCalendarType[], result: ClientProjectCalendarType[] = []) => {
  let currentLevel = START;

  const calculateData = (serverData: ServerProjectCalendarType[], result: ClientProjectCalendarType[] = []) => {
    serverData.forEach(({ sub, ...rest }) => {
      ++currentLevel;

      if(sub) {
        let subId: number[] = [];
        sub.forEach((line) => subId.push(line.id));

        result.push({
          id: rest.id,
          title: rest.title,
          periodStart: rest['period_start'],
          periodEnd: rest['period_end'],
          [`level${currentLevel}`]: subId,
        });

        calculateData(sub, result);

      } else {

        result.push({
          id: rest.id,
          title: rest.title,
          periodStart: rest['period_start'],
          periodEnd: rest['period_end'],
          [`level${currentLevel}`]: [],
        });
      }
    })

    return result
  }

  return calculateData(serverData, result);
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

export const findCurrentEventSubLevelIds = (calendarEvent: ClientProjectCalendarType) => {
  if(!calendarEvent) {
    return null;
  }

  const values = Object.values(calendarEvent);
  const arrays = values.filter((line) => Array.isArray(line));
  const result = arrays.filter((data) => (data as number[]).length > 0).flat();

  return result
};

export const makeSpecificFiltration = (calendarEvents: ClientProjectCalendarType[], filtrationLevel: CalendarLevels) => {
  const filtratedData = calendarEvents.find((oneEvent) => oneEvent[filtrationLevel]);
  if(!filtratedData) {
    return null;
  }

  const ids = (filtratedData[filtrationLevel]) as number[];
  const result = ids.map((id) => calendarEvents.filter((calendar) => calendar.id === id)).flat();

  return result;
};
