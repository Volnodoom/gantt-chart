export const BACKEND_URL = 'http://82.202.204.94/tmp/test.php';
export const REQUEST_TIMEOUT = 5000;

export enum NameSpace {
  CALENDAR_DATA = 'CALENDAR_DATA',
}

export enum LoadingStatus {
  Idle = 'idle',
  Loading = 'loading',
  Succeeded = 'succeeded',
  Failed = 'failed',
}

export enum ApiAction {
  FetchCalendarData = 'general/fetchCalendarData',
}
