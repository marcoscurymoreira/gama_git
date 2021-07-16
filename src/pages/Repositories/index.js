import React, { useEffect, useState } from 'react';//o hook useEffect monitora uma determina variável e, quando esta variável sofrer alguma mudança, ele dispara uma função.
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function Repositories() {
    const history = useHistory();
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');//vai pegar os itens que estão no localStorage ('repositoriesName') e incluir na variável repositoriesName.
        if (repositoriesName !=null) {
            repositoriesName = JSON.parse(repositoriesName)//pegando o que está na variável e transformando em objeto JSON.
            setRepositories(repositoriesName);
            localStorage.clear();//depois de setar os valores dentro de repositoriesName, ele vai limpar o localStorage.
        } else {
            history.push('/');
        }
    }, []);//dentro do array, colocamos as variáveis que o useEffect vai monitorar, porém, se quisermos deixar que o useEffect dispare logo que a página inicie, basta deixar o array vazio.

    return (
        <S.Container>
            <S.Title>Repositórios do GitHub</S.Title >
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem>Repositório: {repository}</S.ListItem>
                    )
                })}
            </S.List>
            {/* <a href='/'>Voltar</a> */}
            <S.LinkHome to='/'>Voltar</S.LinkHome>{/*Aqui utilizamos o Link to no lugar de a href. Para criar um link de voltar para a página que escolhemos. O Link é usado para conseguirmos a SPA.*/}
        </S.Container>
    )
}
