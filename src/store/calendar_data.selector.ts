import { createSelector } from 'reselect';
import { ClientProjectCalendarType, RootState } from "types/server.type";
import { CalendarLevels } from 'utils/const';
import { NameSpace } from "utils/server.const";
import { makeSpecificFiltration } from 'utils/utils';

export const getProjectName = (state: RootState) => state[NameSpace.CALENDAR_DATA].project;
export const getWholePeriod = (state: RootState) => state[NameSpace.CALENDAR_DATA].period;
export const getCalendarStatus = (state: RootState) => state[NameSpace.CALENDAR_DATA].calendarStatus;
export const getFoldedLevel = (state: RootState) => state[NameSpace.CALENDAR_DATA].levelFold;

export const getAllCalendarEvents = (state: RootState): ClientProjectCalendarType[] => state[NameSpace.CALENDAR_DATA].calendarEvent;

export const getCalendarsLevel2 = createSelector(
    getAllCalendarEvents,
  (calendarEvents): ClientProjectCalendarType[] | null =>
    makeSpecificFiltration(calendarEvents, CalendarLevels.level2),
);

export const getCalendarsLevel3 = createSelector(
    getAllCalendarEvents,
  (calendarEvents): ClientProjectCalendarType[] | null =>
    makeSpecificFiltration(calendarEvents, CalendarLevels.level3),
);

export const getCalendarsLevel4 = createSelector(
    getAllCalendarEvents,
  (calendarEvents): ClientProjectCalendarType[] | null =>
    makeSpecificFiltration(calendarEvents, CalendarLevels.level4),
);

export const getCalendarsLevel5 = createSelector(
    getAllCalendarEvents,
  (calendarEvents): ClientProjectCalendarType[] | null =>
    makeSpecificFiltration(calendarEvents, CalendarLevels.level5),
);

