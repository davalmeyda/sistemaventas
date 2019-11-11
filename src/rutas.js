// Importar Paginas
import LoginPage from './pages/login/login_page';
import './rutas.css';

// CARGAR SCRIPT
import Script from 'react-load-script';

import React, { Component } from 'react';
// Importar Route
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import PropTypes from 'prop-types';
// PAGINAS
import NuevaCompraPage from './pages/nuevacompra_page';
import HeaderBloque from './pages/bloques/header_bloque';
import ConfigBloque from './pages/bloques/config_bloque';
import SiderBarBloque from './pages/bloques/siderbar_bloque';
import InicioPage from './pages/inicio_page';
import FooterBloque from './pages/bloques/footer_bloque';

// IMPORTAR COOKIE
import cookie from 'react-cookies';

class Rutas extends Component {

    state = {
        colorHeader: cookie.load('colorHeader'),
        colorSlider: cookie.load('colorSlider'),
    }

    guardarHeader = () => {
        this.setState({
            
        });
    }

    render() {
        if (this.props.user) {
            return (
                <BrowserRouter>
                    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                        <HeaderBloque color={this.state.colorHeader} user={this.props.user}></HeaderBloque>
                        <ConfigBloque accion={this.guardarHeader}></ConfigBloque>
                        <div className='app-main'>
                            <SiderBarBloque color={this.state.colorSlider}></SiderBarBloque>
                            <div className="app-main__outer">
                                <Switch>
                                    <Route exact path="/" component={InicioPage}></Route>
                                    <Route exact path="/nueva-compra" component={NuevaCompraPage}></Route>
                                    <Redirect to="/"></Redirect>
                                </Switch>
                                <FooterBloque></FooterBloque>
                            </div>
                        </div>
                    </div>
                    <Script
                        url="./assets/scripts/main.js"
                        onCreate={this.handleScriptCreate.bind(this)}
                        onError={this.handleScriptError.bind(this)}
                        onLoad={this.handleScriptLoad.bind(this)}
                    />
                </BrowserRouter>
            );
        }
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LoginPage}></Route>
                    <Redirect to="/login"></Redirect>
                </Switch>
            </BrowserRouter>
        );
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }

    NoMatchPage = () => {
        return (
            <h3>404 - Pagina no encontrada</h3>
        );
    };
}
Rutas.propTypes = {
    user: PropTypes.any,
}

export default Rutas;