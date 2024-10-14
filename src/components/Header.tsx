// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ AuthButtons, cart, showInfoMessage, handleClick, categories }) => {
  return (
    <header className="header shop">

      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">

              <div className="top-left">
                <ul className="list-main">
                  <li><i className="ti-headphone-alt"></i>(47)3056-7718</li>
                  <li><i className="ti-email"></i>trouposcomercio@gmail.com</li>
                </ul>
              </div>

            </div>
            <div className="col-lg-8 col-md-12 col-12">

              <div className="right-content">
                <ul className="list-main">
                  <li><i className='ti-help-alt'></i> <a onClick={(e) => showInfoMessage(e)}>Como Funcionamos?</a></li>
                  <li><i className="ti-location-pin" ></i>Localização da Loja</li>
                  <li><i className="ti-user"></i> <a onClick={(e) => handleClick(e)}>Minha Conta</a></li>
                  {AuthButtons}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="middle-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-12">

              <div className="container-fluid">
                <h5>Troupos Comércio de Ferramentas</h5>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="search-bar-top">
                <div className="search-bar">
                  <form>
                    <input name="search" placeholder="Pesquise por produtos aqui" type="search" onChange={(e) => setSearch(e.target.value)} />
                    <div className="btnn"><i className="ti-search"></i></div>
                  </form>
                </div>
              </div>
            </div>
            {cart.length > 0 ?
              <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">
                  <div className="sinlge-bar shopping">
                    <a className="single-icon"><i className="ti-bag"></i> <span className="total-count">{cart.length}</span></a>
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>Items</span>
                      </div>
                      {cart.map(item => {
                        return (
                          <ul className="shopping-list">
                            <li>
                              <a onClick={(e) => removeFromCart(item, e)} className="remove" title="Remover item"><i className="fa fa-remove"></i></a>
                              <a className="cart-img" ><img src={`${process.env.REACT_APP_API}/${item.image}`} alt="#" /></a>
                              <h4><a>{item.name}</a></h4>
                            </li>
                          </ul>
                        )
                      })}
                      <div className="bottom">
                        <a onClick={(e) => sendRequestToWhatsApp(e)} className="btn animate">Fazer Pedido</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              :
              <div className="col-lg-2 col-md-3 col-12">
                <div className="right-bar">
                  <div className="sinlge-bar shopping">
                    <a className="single-icon"><i className="ti-bag"></i> <span className="total-count">0</span></a>
                    <div className="shopping-item">
                      <div className="dropdown-cart-header">
                        <span>Items</span>
                      </div>
                      <div className="bottom">
                        <div className="total">
                        </div>
                        <a className="btn animate">Adicione Items ao Carrinho</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="header-inner">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                    {categories.map((item) => {
                      return (
                        <li><a className="dropdown-item" href={`/categoria/${item.slug}/${item.id}`}>{item.name}</a></li>
                      )
                    })}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Header;