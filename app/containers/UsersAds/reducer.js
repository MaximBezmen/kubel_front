import produce from 'immer';
import {
  genericReducer,
  namedListParams,
} from '../../dataProvider/routineUtils';
import { getContractsAction } from './actions';

export const key = 'contracts';

export const initialState = {
  contracts: namedListParams('contracts'),
};

const contractsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case getContractsAction.REQUEST:
      case getContractsAction.SUCCESS:
      case getContractsAction.FAILURE:
        genericReducer(state, draft, action, initialState.contracts.name);
        break;
      default:
        break;
    }
  });

export default contractsReducer;
