import { createStore } from 'redux'; //Componente do Redux, criar estado global da aplicação

import rootReducer from './reducers'; //Chamando o diretório o programa já entende que está chamando apenas o index.

const store = createStore(rootReducer)//Tudo que estiver no rooReducer, será o estado global.

export default store;
