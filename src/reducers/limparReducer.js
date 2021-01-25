import  CLICK_LIMPAR from "../actions/actionTypes";

const initialState = {
    novoValor: ''
};

 const limparReducer = (state = initialState, action) => {
    switch(action.type){
        case CLICK_LIMPAR:
            return { 
                ...state, 
                novoValor: action.newValue 
              }; 
        default:
            return state;
    }
};

export default limparReducer;