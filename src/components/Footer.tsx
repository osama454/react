// components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-top section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12">

                            <div className="single-footer about">
                                <div>
                                    <h1>Troupos Comércio de Ferramentas</h1>
                                </div>
                                <p className="text">A nossa loja tem uma grande variedade de produtos nacionais e importados, ferramentas, utensílios domésticos, eletrônicos e muito mais.</p>
                                <p className="call">Tem alguma dúvida? Nos contate!<span><a href="tel:4730567718">(47)3056-7718</a></span></p>
                            </div>

                        </div>

                        <div className="col-lg-3 col-md-6 col-12">

                            <div className="single-footer social">
                                <h4>Entre em Contato</h4>

                                <div className="contact">
                                    <ul>
                                        <li>Balneário Camboriú.</li>
                                        <li>Santa Catarina, Brasil.</li>
                                        <li>trouposcomercio@gmail.com</li>
                                        <li>(47)3056-7718</li>
                                    </ul>
                                </div>

                                <ul>
                                    <li><a href="/"><i className="ti-facebook"></i></a></li>
                                    <li><a href="/"><i className="ti-instagram"></i></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="left">
                                    <p>Copyright © 2022 <a href="/" target="_blank">Troupos Comércio de Ferramentas</a> - Todos os Direitos Reservados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;