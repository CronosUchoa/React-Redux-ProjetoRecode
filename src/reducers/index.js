//um reducer
import clickReducer from './clickReducer';
import limparReducer from './limparReducer';
//outros 
// import {outroReducer} from './outroReducer'
// import {maisUmReducer} from './maisUmReducer'

//combina todos os reducers do projeto no mesmo objeto reducer
import {combineReducers} from 'redux';


 const Reducers = combineReducers({
    //estado // função pura - action
    clickState: clickReducer,
    limparState: limparReducer
    // outroState: outroReducer,
    // maisumState:maisUmReducer
});

export default Reducers