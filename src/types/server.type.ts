import { store } from "store";
import { AxiosInstance } from 'axios';
import { LoadingStatus } from "utils/server.const";
import { CalendarLevels } from "utils/const";


export type ServerDataType = {
  project: string,
  period: string,
  chart: ServerProjectCalendarType,
};

export type ServerProjectCalendarType = {
  id: number,
  title: string,
  'period_start': string,
  'period_end': string,
  sub: ServerProjectCalendarType[],
};

export type NormalizedServerType = {
  id: number,
  title: string,
  'period_start': string,
  'period_end': string,
  subId: number[],
}

export type ClientProjectCalendarType = {
  id: number,
  title: string,
  periodStart: string,
  periodEnd: string,
  level1?: number [],
  level2?: number [],
  level3?: number [],
  level4?: number [],
  level5?: number [],
  level6?: number [],
};

export type CalendarDataType = {
  project: string | null,
  period: string | null,
  calendarEvent: ClientProjectCalendarType[],
  activeCalendarId: number | null,
  levelFold: CalendarLevels | null,
  calendarStatus: LoadingStatus,
};

export type ProjectType = {
  project: string,
  period: string,
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ServerApiConfigType = {
  dispatch: AppDispatch,
  state: RootState,
  extra: AxiosInstance,
};
