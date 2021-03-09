import { createSelector } from 'reselect';
import { initialState, key } from './reducer';
import { selectListData } from '../App/selectors';

const selectContractsDomain = state => state[key] || initialState;

const selectContracts = () =>
  createSelector(
    selectListData(selectContractsDomain, initialState.contracts.name),
    data => data,
  );

export { selectContracts };
