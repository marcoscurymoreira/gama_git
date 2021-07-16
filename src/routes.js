//este arquivo de rotas será gerido pelo react router dom, que é o responsável pelas rotas da nossa aplicação React.

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Repositories from './pages/Repositories/index';
import Home from './pages/Home/index';


function Routes() {
    return (
        <BrowserRouter>{/*é o container principal do react router dom*/}
            <Switch>{/*conforme clicamos ou digitamos, o switch nos leva para a Route correspondente.*/}
                <Route path='/' exact component={Home} />{/*o exact serve para difinir que quando tiver somente '/', vai direcionar para a rota raiz*/}
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes