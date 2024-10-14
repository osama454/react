// components/Product.js
import React from 'react';

const Product = ({ product, addToCart }) => {

    const sendSingleProductMessage = (e, item) => {
        e.preventDefault();
        window.location.replace(`https://api.whatsapp.com/send?phone=554730567718&text=Ol%C3%A1,%20tenho%20interesse%20no%20produto:%0a*${item.name}*%0a`)
    };

    return (
        <div className="col-3">
            <div className="single-product">
                <div className="product-img">
                    <a className='product-img-cover' style={{ backgroundImage: `url('${process.env.REACT_APP_API}/${product.image}')` }}>
                    </a>

                    <div className="button-head">
                        <div className="product-action">
                            <a onClick={(e) => sendSingleProductMessage(e, product)}>Pedir Agora</a>
                        </div>
                        <div className="product-action-2">
                            <a onClick={(e) => addToCart(product, e)
                            } >Adicionar ao Carrinho</a>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <h6>{product.name}</h6>
                </div>
            </div>
        </div>
    );
};


export default Product;