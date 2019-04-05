import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/combineReducer';

const store = createStore(rootReducer, composeWithDevTools());

export default store;