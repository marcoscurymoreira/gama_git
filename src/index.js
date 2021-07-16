import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Repositories from './repositories';


ReactDOM.render(
  //aqui nós estamos renderizando a funcion App que foi criada no arquivo App.js. É assim que funciona a componentização. O ReactDOM, com o método render, é responsável por fazer isso.

  <App />,
  //neste ponto nós escolhemos de onde vem o conteúdo que queremos renderizar, que no caso é a function App do arquivo App.js.

  document.getElementById('root')
  //e aqui nós indicamos onde iremos usar o "App". No caso, escolhemos o id='root' que está no index.html
);