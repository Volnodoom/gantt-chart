import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalendarDataType, ClientProjectCalendarType, ProjectType } from "types/server.type";
import { CalendarLevels } from 'utils/const';
import { LoadingStatus, NameSpace } from 'utils/server.const';
import { fetchCalendarData } from './api_actions';

const initialState: CalendarDataType = {
  project: null,
  period: null,
  calendarEvent: [],
  activeCalendarId: null,
  levelFold: null,
  calendarStatus: LoadingStatus.Idle,
}

export const calendarData = createSlice({
  name: NameSpace.CALENDAR_DATA,
  initialState,
  reducers: {
    setProject: (state, action: PayloadAction<ProjectType>) => {
      state.project = action.payload.project;
      state.period = action.payload.period;
    },
    setCalendarEvent: (state, action: PayloadAction<ClientProjectCalendarType[]>) => {
      const data = action.payload;
      const stateBase = state.calendarEvent;

      data.forEach((object) => {
        const currentId = object.id;
        const hasIdInDataBase = stateBase.some((object) => object.id === currentId);

        if(!hasIdInDataBase) {
          state.calendarEvent.push(object);
        }
      })
    },
    setActiveCalendarId: (state, action: PayloadAction<number | null>) => {
      state.activeCalendarId = action.payload;
    },
    setFoldedLevel: (state, action: PayloadAction<CalendarLevels | null>) => {
      state.levelFold = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCalendarData.pending, (state) => {
        state.calendarStatus = LoadingStatus.Loading;
      })
      .addCase(fetchCalendarData.fulfilled, (state) => {
        state.calendarStatus = LoadingStatus.Succeeded;
      })
      .addCase(fetchCalendarData.rejected, (state) => {
        state.calendarStatus = LoadingStatus.Failed;
      });
  }
})

export const {
  setProject,
  setCalendarEvent,
  setActiveCalendarId,
  setFoldedLevel,
} = calendarData.actions;
