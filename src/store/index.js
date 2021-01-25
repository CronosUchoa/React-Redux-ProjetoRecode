//criando store

import { createStore } from 'redux';
import  Reducers  from '../reducers';

 const Store = createStore(Reducers);
 export default Store

//Store = Store é um objeto Js que armazena todo o  conjunto de estados(states) da aplicação.

//Reducers = cada ação tem um reducer.
//é responsável por receber ação e excutar a atualização para cada valor na store.
// cada valor em store precisa ter seu próprio reducer.

//actions = responsáveis por requisitar algo para um reducer.
//actions = funções puras e apenas enviar os dados ao reducer

//State = Toda e qualquer informação da view é armazenada em um único objeto global chamado state.