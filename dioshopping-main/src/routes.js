import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
            //Rota Mãe
                path="/"
                element={<HomePage />}
            />
            <Route
            //Rota para a página de contatos
                path="/contato"
                element={<Contatos />}
            />
        </Routes>
    )
}

export default MainRoutes;
