import React from 'react'
import Header from "../../Components/Layout/Header";
import { Link } from 'react-router-dom';

import "./QuemSomos.scss"

import { QSBalao1, QSBalao2, QSBalao3, QSBalao4, QSBalao5, QSBalaoVerde, QSBalaoConversa, QSIconDataCenter } from '../../Components/ImagemSvg/ImagemSvg';
import maozinha from '../../Images/maozinha.png';
import macbook from '../../Images/macbook.png';
import Nuvem1 from '../../Images/nuvem-1.png';
import Nuvem2 from '../../Images/nuvem-2.png';
import Nuvem3 from '../../Images/nuvem-3.png';
import Nuvem4 from '../../Images/nuvem-4.png';
import Nuvem5 from '../../Images/nuvem-5.png';
import Footer from '../../Components/Layout/Footer';


export default function QuemSomos(props)
{

    return(
        <>
            <div id="quem-somos">
                <div id="header">
                    <Header />
                    <div id={'conheca'}>
                        <div className={'container-fluid'}>
                            <div className={'left'}>
                                <img className={'maozinha'} src={maozinha}/>
                                <img className={'macbook'} src={macbook}/>
                            </div>
                            <div className={'right'}>
                                <h2>Conheça a Eyou</h2>
                                <div className="line animate__animated"></div>
                                <p>
                                    Somos uma empresa focada no desenvolvimento de soluções inteligentes para Comunicação
                                    através de mensagens SMS, Email, Voz, WhatsApp, Push, ChatOnline e ChatBot para o
                                    mercado corporativo, através das mais modernas tecnologias digitais interativas,
                                    amplo portfólio de produtos e serviços, focados no desenvolvimento de soluções sob
                                    medida para atender as mais diversas necessidades de nossos clientes.
                                    <br />
                                    <br />
                                    <b>
                                        Temos vasta experiência e um perfil consultivo, para auxiliar você na melhor escolha das soluções
                                        e garantir seu sucesso Digital.
                                    </b>
                                </p>
                                <Link to={'/contato'}>
                                    <button type={'button'} className={'btn'}>
                                        Entre em contato!
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pilares">
                <div className={'container-fluid'}>
                    <h2>Nossos pilares para <b>alavancar o crescimento dos seus resultados.</b></h2>
                    <h3>
                        Somos um time com mais de 20 anos de atuação em Mobilidade e Telefonia, vários projetos implementados para Operadoras de Telefonia, Bancos, Varejo, Distribuição, entre outros. Queremos agora contribuir com o seu negócio.
                    </h3>
                    <ul>
                        <li>
                            <QSBalao1 />
                            <p>AUMENTAR A RENTABILIDADE</p>
                        </li>
                        <li>
                            <QSBalao2 />
                            <p>POTENCIALIZAR NEGÓCIOS</p>
                        </li>
                        <li>
                            <QSBalao3 />
                            <p>COMPARTILHAR EXPERTISE</p>
                        </li>
                        <li>
                            <QSBalao4 />
                            <p>OFERECER SOLUÇÕES ACESSÍVEIS</p>
                        </li>
                        <li>
                            <QSBalao5 />
                            <p>SIMPLIFICAR PROCESSOS</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div id={'integracao'}>
                <div className={'container-fluid'}>
                    <div className={'left'}>
                        <h2>Integração padronizada: <br /> mínimo esforço e baixos custos</h2>
                        <p>
                            Todos os nossos produtos seguem um padrão único de integração, ou seja, com uma única integração
                            nossos clientes conectam seus sistemas a qualquer um dos serviços contratados.
                            <br />
                            <br />
                            <b>Desta forma garantimos aos nossos clientes o mínimo de esforço em desenvolvimento e impacto em custos.</b>
                        </p>
                        <Link to={'/contato'}>
                            <button type={'button'} className={'btn'}>
                                Dúvidas sobre integração? Fale conosco
                            </button>
                        </Link>
                    </div>
                    <div className={'right'}>
                        <QSBalaoVerde />
                        <QSBalaoConversa />
                    </div>
                </div>
            </div>
            <div id={'nuvem'}>
                <img className={'nuvem-1'} src={Nuvem1} />
                <img className={'nuvem-2'} src={Nuvem2} />
                <img className={'nuvem-3'} src={Nuvem3} />
                <img className={'nuvem-4'} src={Nuvem4} />
                <img className={'nuvem-5'} src={Nuvem5} />
                <div className={'container-fluid'}>
                    <QSIconDataCenter />
                    <h2>Plataforma em Nuvem</h2>
                    <p>Nosso modelo de fornecimento é 100% online e alocado no Cloud Oracle, o mais seguro e estáveis do Mercado.</p>
                    <ul>
                        <li><b>•</b> Garantia de baixos investimentos e nenhum impacto de infra estrutura na sua empresa.</li>
                        <li><b>•</b> Investimentos em softwares, hardwares e infraestrutura por conta da Eyou.</li>
                        <li><b>•</b> Hospedagem robusta, que garante alta disponibilidade, redundância, balance e suporte.</li>
                        <li><b>•</b> Plataforma 100% desenvolvida por equipe especializada, com mais de 20 anos de mercado.</li>
                        <li><b>•</b> Sistema totalmente modular customizável de alta performance, adequando seu projeto de forma rápida e baixo custo.</li>
                    </ul>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}