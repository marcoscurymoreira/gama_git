import React, { useState } from 'react';//importando o useState, que é um hook que permite citar e modificar estados.
import axios from 'axios';//importando o axios, que vamos utilizar para fazer requisições a API do GitHub.
import * as S from './styled';
import { useHistory } from 'react-router-dom';//serve para controlar a página, direcionar para outras páginas, etc.



function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  //estamos definindo o estado usuario, usando a hook useState. O useState não só define um estado, ele é uma função que retorna um array. Esse array tem duas posições, a primeira retorna o valor do estado e na segunda ele retorna uma função que será usuada para setar este valor. [usuario(é o estado que escolhemos), setUsuario(é uma convenção)]. O valor inicial de usuário é uma string vazia, porque queremos uma string em usuário: useState('').
  
  const [erro, setErro] = useState(false);//usando o state para informar um erro.

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {//fazendo a requisição para a API do GitHub, então(then), me traga a resposta no console.log.
        const repositories = response.data;//colocando a resposta em uma variável
        const repositoriesName = []//aqui criamos uma variável repositoriesName que vai receber um array vazio. Posteriormente este array será preenchido com os nomes dos repositórios do Git através do filtro que fizemos abaixo.

        repositories.map((repository) => {//O repositories.map vai mapear as informações que vem do GitHub. O repository é um parâmetro da função.
          repositoriesName.push(repository.name);//então, finalmente o repositoriesName vai dar um push somente no name do GItHub, que foi mapeado acima, fazendo com que a variável repositoriesName armazene no array vazio os nomes dos repo do Git.
        });

        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));//aqui nós determinando que as informações do repositoriesName seja armazenadas no localStorage(no navegador) e transformando a resposta que vem em JSON em uma string.

        setErro(false);//se nossa resposta da api vier correta, setErro como false. Do contrário, cai no catch abaixo e seta o erro como true.

        history.push('/repositories');//inserindo no history o /repositories

      })
      .catch(err => {
        setErro(true);
      })

  }

  return (
    <S.HomeContainer>
      <S.Content>
        {/*<> isto é um fragment, uma tag vazia. Serve para enclausurar o input que criamos. Isso substitui a criação de divs ou outras tags desnecessárias.*/}

        <S.Input className='usuarioInput' placeholder="Username GitHub" value={usuario} onChange={e => setUsuario(e.target.value)} />
        {/*não podemos usar somente 'class' como no HTML comum, pois é uma palavra reservada do JS, portanto, usamos 'className'*/}

        {/*o "value={usuario} controla para que o valor digitado no input seja direcionado para o estado, gerando uma única fonte de dados. NÃO ENTENDI ISSO*/}

        {/*O --- onChange={e => setUsuario(e.target.value)}--- vai capturar qualquer alteração dentro do input que criamos. Sempre que eu tiver uma alteração, o e=> (evento chama a função) setUsuario(e.target.value) esta função vai setar no usuario o valor recebido no input.*/}

        <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
        {/*o onClick={handlePesquisa} determina que, ao clicar no botão, a função handlePesquisa será chamada*/}
      </S.Content>
      {erro === true ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg>: ''} {/* se o erro for true, mostre a msg. Se não, não mostre nada. */}

    </S.HomeContainer>

  );
}

export default App;

//OS CÓDIGOS HTML DENTRO DO JS SÃO CHAMADOS JSX (JAVASCRIPT XML).

//SE QUISERMOS INSERIR UM CÓDIGO JS DENTRO DE UM JSX, UTILIZAMOS { CÓDIGO AQUI DENTRO }.

//NO HTML A CLASS E PLACEHOLDER, POR EXEMPLO, SÃO COMPONENTES. NO REACT, ELAS SÃO PROPRIEDADES.
