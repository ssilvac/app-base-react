import { createStore } from 'redux';
import reducer from './reducers'
import { getStateStorage, setStateStorage } from './localStorage';

//const initialState = [];

const stateStorage = getStateStorage();

const store = createStore(
    reducer,
    stateStorage,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    setStateStorage({
        modulo: store.getState().modulo,
        app: store.getState().app
    });
})

export default store;