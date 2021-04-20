import React from 'react'
import Header from "../../Components/Layout/Header";

import "./Index.scss"

import { IconProductSms, IconProductTelephony, IconProductWhatsapp, Logo, PersonAbout } from '../../Components/ImagemSvg/ImagemSvg';
import Banner from '../../Images/bg-home.png'
import { Link } from 'react-router-dom';

export default function Index(props)
{

    return(
        <div id="index">

            <div id="header">

                <Header/>

                <div id="banner">

                    <div className="image-background">
                        
                        <div className="full" style={{backgroundImage: `url(${Banner})`}}></div>
                        <div className="container">
                            <div className="line animate__animated"></div>
                        </div>

                    </div>

                    <div className="container">
                        
                        <div className="text">

                            <h3><b>Novidade!</b> Eialerta agora é</h3>
                            
                            <div className="image">
                                <Logo width={440} height={122}/>
                            </div>

                            <p>
                                Conheça nossa plataforma multicanal para envio de mensagens aos seus clientes, totalmente customizavel e modular - <span>Tenha total liberdade e crie uma solução sob medida para sua empresa.</span> 
                            </p>

                            <a className="btn outline white">COMECE AGORA, É GRÁTIS!</a>

                        </div>
                    </div>

                </div>

            </div>

            <div id="products-default" className="container">

                <div className="product">
                    <div className="title">
                        <IconProductSms/>
                        <span>SMS</span>
                    </div>
                    <p>
                        <b>• 100% dos celulares recebem</b><br/>
                        <b>• 99%</b> das mensagens são <b>entregues</b> <br/>
                        <b>• 90% abertos</b> em até <b>3 minutos</b> <br/>
                        <b>• 234 Milhões</b> de Celulares no Brasil <br/>
                        <b>• 5 Bilhões</b> de Celulares no Mundo
                    </p>
                    <Link>saiba mais</Link>
                </div>

                <div className="product">
                    <div className="title">
                        <IconProductTelephony/>
                        <span>Telefonia</span>
                    </div>
                    <p>
                        <b>• 100%</b> dos telefones <b>fixos</b><br/>
                        <b>• 100%</b> dos telefones <b>celulares</b><br/>
                        <b>• 234 milhões</b> de Celulares<br/>
                        <b>• 40 milhões</b> de telefones fixos 
                    </p>
                    <Link>saiba mais</Link>
                </div>

                <div className="product">
                    <div className="title">
                        <IconProductWhatsapp/>
                        <span>Whatsapp</span>
                    </div>
                    <p>
                        <b>• 90%</b> dos smartphones com app <b>Instalado</b> <br/>
                        <b>• 92%</b> das mensagens <b>são entregues</b> <br/>
                        <b>• 86% abertos</b> em até <b>3 minutos</b> <br/>
                        <b>• 127 Milhões</b> de usuários no Brasil
                    </p>
                    <Link>saiba mais</Link>
                </div>

            </div>

            <div id="about">

                <div className="container">

                    <PersonAbout/>

                    <div className="text-about">

                        <h2>
                        22 anos contribuindo ativamente para o desenvolvimento do Mercado.
                        
                        </h2>
                        <p>
                            • Mais de 190 clientes, dos mais diversos segmentos<br/>
                            • Foco em resultados concretos<br/>
                            • Infraestrutura e equipe especializada<br/>
                            • Integração via API e nativo em várias Aplicações do mercado de CRM, Cobrança e Financeiro. 
                        </p>

                        <Link className="btn outline primary">Conheça mais sobre nós</Link>

                    </div>

                </div>

            </div>

        </div>
    )

}