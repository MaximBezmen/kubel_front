import produce from 'immer';
import { getManagersAction } from './actions';
import {
  genericReducer,
  namedListParams,
} from '../../dataProvider/routineUtils';

export const key = 'mainContent';

export const initialState = {
  managers: namedListParams('managers'),
};

const mainContentReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case getManagersAction.REQUEST:
      case getManagersAction.SUCCESS:
      case getManagersAction.FAILURE:
        genericReducer(state, draft, action, initialState.managers.name);
        break;
      default:
        break;
    }
  });

export default mainContentReducer;
