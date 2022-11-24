import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'utils/server.const';
import { calendarData } from './calendar_data';

export const rootReducer = combineReducers ({
  [NameSpace.CALENDAR_DATA]: calendarData.reducer,
})
