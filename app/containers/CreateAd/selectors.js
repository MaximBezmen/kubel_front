import { createSelector } from 'reselect';
import { initialState, key } from './reducer';
import { selectListData } from '../App/selectors';
import { managerTypes } from '../../constants/api';

const selectCreateAgreementDomain = state => state[key] || initialState;

const selectManagersToCreateAgreement = () =>
  createSelector(
    selectListData(selectCreateAgreementDomain, initialState.managers.name),
    data => data,
  );

const selectRequiredManagers = () =>
  createSelector(
    selectManagersToCreateAgreement(),
    managers =>
      managers.filter(manager => manager?.type === managerTypes.DEPARTMENT),
  );
const selectOptionalManagers = () =>
  createSelector(
    selectManagersToCreateAgreement(),
    managers =>
      managers.filter(manager => manager?.type === managerTypes.PROJECT),
  );

export {
  selectCreateAgreementDomain,
  selectManagersToCreateAgreement,
  selectRequiredManagers,
  selectOptionalManagers,
};
