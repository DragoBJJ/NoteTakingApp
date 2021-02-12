import { createStore } from 'redux';
import { rootReducer } from './Recuders';

const store = createStore(rootReducer);

export default store;
