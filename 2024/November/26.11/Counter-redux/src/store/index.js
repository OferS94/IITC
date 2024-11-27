import {createStore} from 'redux';
import counterReducer from './reducers/actionReducer';

export const store = createStore(counterReducer);