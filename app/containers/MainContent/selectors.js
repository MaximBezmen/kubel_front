import { createSelector } from 'reselect';
import { initialState, key } from './reducer';
import { selectListData } from '../App/selectors';
import { managerTypes } from '../../constants/api';

const selectMainContentDomain = state => state[key] || initialState;

const selectManagers = () =>
  createSelector(
    selectListData(selectMainContentDomain, initialState.managers.name),
    data => data,
  );

const selectProjectManagers = () =>
  createSelector(
    selectManagers(),
    managers =>
      managers.filter(manager => manager?.type === managerTypes.PROJECT),
  );
const selectDepartmentManagers = () =>
  createSelector(
    selectManagers(),
    managers =>
      managers.filter(manager => manager?.type === managerTypes.DEPARTMENT),
  );

export {
  selectMainContentDomain,
  selectManagers,
  selectProjectManagers,
  selectDepartmentManagers,
};
