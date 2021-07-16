import styled from 'styled-components';
import { Link } from 'react-router-dom';//o link nos ajuda a usar o conceito de SPA. Ele faz o link entre páginas.

export const Container = styled.div`
    width: 100%;
    max-width: 991px;
    margin: 0 auto;
`
//a largura máxima está definida em 991px, mas para ele não ficar colado em um canto, colocamos uma margin 0 auto. 0 porque não tem nada de margem e auto para ele ficar centralizado.

export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`;
export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
`;

export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`;

export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    padding: .5rem 0;
    color: #fff;
    text-decoration: none;
`
