// Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
// import './css/home.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { useAuthButtons } from './components/AuthButtons';
import { useCart } from './components/CartContext';
import LoadingIndicator from './components/LoadingIndicator';


const Home = () => {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const { cart, addToCart, removeFromCart, sendRequestToWhatsApp } = useCart();
    const [page, setPage] = useState(0);
    const productsPerPage = 12;
    const pagesVisited = page * productsPerPage;
    const navigate = useNavigate();

    const getCategories = () => {
        axios.get('/api/category/show').then(res => {
            setCategories(res.data)
        })
    }

    const getProducts = () => {
        axios.get('/api/view-product').then(response => {
            if (response.data.status === 200) {
                setProducts(response.data.products)
            }
        })
    }

    const logout = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('/api/logout').then(res => {
            if (res.data.status === 200) {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                setIsLoading(false);
                swal("Success", res.data.message, "success");
                navigate('/');
            }
        });
    };

    const showInfoMessage = (e) => {
        e.preventDefault();
        swal("Como Funcionamos?", "Aqui no site você tem duas opções. Em 'Pedir Agora' você será redirecionado para o WhatsApp solicitando o orçamento do Produto direto com a loja, para saber sua disponibilidade, preço e se tem a opção de entrega, ou você também pode fazer um carrinho e solicitar vários items de uma vez só.")
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (localStorage.getItem('auth_token')) {
            navigate('/myAccount')
        } else {
            navigate('/login')
        }
    };


    const changePage = ({ selected }) => {
        setPage(selected);
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const AuthButtons = useAuthButtons(logout);

    return (
        <div id="home" className='home'>
            {isLoading && <LoadingIndicator />}
            <Header
                AuthButtons={AuthButtons}
                cart={cart}
                showInfoMessage={showInfoMessage}
                handleClick={handleClick}
                categories={categories}
            />
            <ProductList
                products={products}
                search={search}
                addToCart={addToCart}
                pagesVisited={pagesVisited}
                productsPerPage={productsPerPage}
                pageCount={Math.ceil(products.length / productsPerPage)}
                changePage={changePage}

            />
            <Footer />
        </div>
    );
};

export default Home;
