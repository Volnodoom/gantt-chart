import { createAsyncThunk} from '@reduxjs/toolkit';
import { ServerApiConfigType, ServerDataType } from 'types/server.type';
import { ApiAction } from 'utils/server.const';
import { adaptServerData } from 'utils/utils';
import { setCalendarEvent, setProject } from './calendar_data';

export const fetchCalendarData = createAsyncThunk<void, void, ServerApiConfigType>(
  ApiAction.FetchCalendarData,
  async (_arg, {dispatch, extra: api}) => {
    try{
      const {data} = await api.get<ServerDataType>('');
      const clientData = adaptServerData([data.chart]);

      dispatch(setCalendarEvent(clientData));
      dispatch(setProject({project: data.project, period: data.period}));
    } catch (error) {
      throw error;
    }
  }
);
