import { createSelector } from 'reselect';
import { ClientProjectCalendarType, RootState } from "types/server.type";
import { NameSpace } from "utils/server.const";

export const getProjectName = (state: RootState) => state[NameSpace.CALENDAR_DATA].project;
export const getWholePeriod = (state: RootState) => state[NameSpace.CALENDAR_DATA].period;
export const getCalendarStatus = (state: RootState) => state[NameSpace.CALENDAR_DATA].calendarStatus;

export const getAllCalendarEvents = (state: RootState): ClientProjectCalendarType[] => state[NameSpace.CALENDAR_DATA].calendarEvent;
const getActiveCalendarId = (state: RootState) => state[NameSpace.CALENDAR_DATA].activeCalendarId;

export const getCalendarEventById = createSelector(
  [
    getAllCalendarEvents,
    getActiveCalendarId,
  ],
  (calendarEvents, id): ClientProjectCalendarType | undefined => {
    const result = calendarEvents.find((oneEvent) => oneEvent.id === id);
    return result;
  }
)
