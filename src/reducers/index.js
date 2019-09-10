import { combineReducers } from 'redux';
import authenticationReducers from './authenticationReducers';
import MaterialListReducers from './MaterialCreateReducer';
import MaterialDataReducers from './MaterialDataReducers';
import MaterialUpdateReducers from './MaterialUpdateReducers';

export default combineReducers({
    authenticationResponse: authenticationReducers,
    materialListResponse: MaterialListReducers,
    materialDataResponse: MaterialDataReducers,
    materialUpdateResponse: MaterialUpdateReducers
});