import React from 'react'
import Header from "../../Components/Layout/Header";

import "./Index.scss"

import { IconChamadoTecnico, IconEyou, IconMultisessao, IconProductSms, IconProductTelephony, IconProductWhatsapp, IconSemSurpresa, IconTecnologia, Logo, PersonAbout } from '../../Components/ImagemSvg/ImagemSvg';
import Banner from '../../Images/bg-home.png'
import bgSolucoes from '../../Images/bg-solucoes.png'
import { Link } from 'react-router-dom';
import ListagemProdutos from '../../Components/Produtos/ListagemProdutos';

import { IconSolucaoMarketing } from '../../Components/ImagemSvg/svg/IconSolucaoMarketing';
import { IconSolucaoTecnologia } from '../../Components/ImagemSvg/svg/IconSolucaoTecnologia';
import { IconSolucaoFinancas } from '../../Components/ImagemSvg/svg/IconSolucaoFinancas';
import { IconSolucaoAtendimento } from '../../Components/ImagemSvg/svg/IconSolucaoAtendimento';
import { IconSolucaoLogistica } from '../../Components/ImagemSvg/svg/IconSolucaoLogistica';
import { IconSolucaoComunicacao } from '../../Components/ImagemSvg/svg/IconSolucaoComunicacao';
import { IconVantagemTableTimes } from '../../Components/ImagemSvg/svg/IconVantagemTableTimes';
import { IconVantagemTableCheck } from '../../Components/ImagemSvg/svg/IconVantagemTableCheck';
import { IconVantagemTableCircle } from '../../Components/ImagemSvg/svg/IconVantagemTableCircle';
import { ParceiroFake } from '../../Components/ImagemSvg/svg/ParceiroFake';
import Footer from '../../Components/Layout/Footer';

export default function Index(props)
{

    return(
        <div id="index">

            <div id="header">

                <Header/>

                <div id="banner" className="page-effect">

                    <div className="image-background">
                        
                        <div className="full" style={{backgroundImage: `url(${Banner})`}}></div>
                        <div className="container">
                            <div className="line animate__animated"></div>
                        </div>

                    </div>

                    <div className="container">
                        
                        <div className="text">

                            <h3><b>Novidade!</b> Eialerta agora ??</h3>
                            
                            <div className="image">
                                <Logo width={440} height={122}/>
                            </div>

                            <p>
                                Conhe??a nossa plataforma Omnichannel para envio de mensagens aos seus clientes, totalmente customizavel e modular - <span>Tenha total liberdade e crie uma solu????o sob medida para sua empresa.</span> 
                            </p>

                            <a className="btn outline white" href={'/contato'}>AGENDE UM TESTE GR??TIS</a>

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
                        <b>??? 100% dos celulares recebem</b><br/>
                        <b>??? 99%</b> das mensagens s??o <b>entregues</b> <br/>
                        <b>??? 90% abertos</b> em at?? <b>3 minutos</b> <br/>
                        <b>??? 234 Milh??es</b> de Celulares no Brasil <br/>
                        <b>??? 5 Bilh??es</b> de Celulares no Mundo
                    </p>
                    <Link to={'/servicos'}>saiba mais</Link>
                </div>

                <div className="product">
                    <div className="title">
                        <IconProductTelephony/>
                        <span>Telefonia</span>
                    </div>
                    <p>
                        <b>??? 100%</b> dos telefones <b>fixos</b><br/>
                        <b>??? 100%</b> dos telefones <b>celulares</b><br/>
                        <b>??? 234 milh??es</b> de Celulares<br/>
                        <b>??? 40 milh??es</b> de telefones fixos 
                    </p>
                    <Link to={'/servicos'} >saiba mais</Link>
                </div>

                <div className="product">
                    <div className="title">
                        <IconProductWhatsapp/>
                        <span>WhatsApp</span>
                    </div>
                    <p>
                        <b>??? 90%</b> dos smartphones com app <b>Instalado</b> <br/>
                        <b>??? 92%</b> das mensagens <b>s??o entregues</b> <br/>
                        <b>??? 86% abertos</b> em at?? <b>3 minutos</b> <br/>
                        <b>??? 127 Milh??es</b> de usu??rios no Brasil
                    </p>
                    <Link to={'/servicos'}>saiba mais</Link>
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
                            ??? Mais de 190 clientes, dos mais diversos segmentos<br/>
                            ??? Foco em resultados concretos<br/>
                            ??? Infraestrutura e equipe especializada<br/>
                            ??? Integra????o via API e nativo em v??rias Aplica????es do mercado de CRM, Cobran??a e Financeiro. 
                        </p>

                        <Link className="btn outline primary" to={'/quem-somos'}>Conhe??a mais sobre n??s</Link>

                    </div>

                </div>

            </div>

            <div id="services">

                <div className="container">

                    <h4>
                    Aproveite toda a versatilidade da Plataforma Omnichannel Eyou.<br/> Use e abuse da criatividade e de estrat??gias para atingir seu target!
                    </h4>

                    <ListagemProdutos/>

                    <div className="vantagens">

                        <div className="vantagem">
                            <IconMultisessao/>
                            <p>
                                <b>Multisse????o</b>
                                <span>Acesso hierarquizado para colaboradores, parceiros e departamentos.</span>
                            </p>
                        </div>

                        <div className="vantagem">
                            <IconChamadoTecnico/>
                            <p>
                                <b>
                                    Resolva sue chamado em 1 ??nico contato
                                </b>
                                <span>
                                    Atendimento 24h x 7 dias por semana por chat ou telefone com atendimento profissional.
                                </span>
                            </p>
                        </div>

                        <div className="vantagem">
                            <IconTecnologia/>
                            <p>
                                <b>
                                    Tecnologia
                                </b>
                                <span>
                                    Ferramentas digitais modernas e uso de Intelig??ncia artificial.
                                </span>
                            </p>
                        </div>

                        <div className="vantagem">
                            <IconSemSurpresa/>
                            <p>
                                <b>
                                    Sem supresas
                                </b>
                                <span>
                                    Software com manuten????o e atualiza????o sem custos.
                                </span>
                            </p>
                        </div>

                    </div>

                    <Link className="btn orange" to={'/contato'}>
                        Comece hoje mesmo um teste gr??tis!
                    </Link>

                </div>

            </div>

            <div id="solucoes">

                <div className="container">

                    <div className="image-absolute">
                        <IconEyou/>
                        <img src={bgSolucoes}/>
                    </div>

                    <h5>Solu????es customizadas para necessidades espec??ficas.</h5>

                    <p>
                        Combinamos nossas ferramentas modulares para potencializar a rentabilidade do seu neg??cio, colocando-o em contato com seu p??blico-alvo e maximizando resultados.
                    </p>

                    <div className="lista">

                        <div className="item">
                            <div className="icon">
                                <IconSolucaoMarketing/>
                            </div>
                            <p>
                                Marketing e Vendas

                                <span>
                                    ??? Divulga????o e Promo????es para  Clientes <br/>
                                    ??? Qualifica????o de Leads <br/>
                                    ??? Confirma????o de pedido
                                </span>
                            </p>
                            
                        </div>

                        <div className="item">
                            <div className="icon">
                                <IconSolucaoTecnologia/>
                            </div>
                            <p>
                                Tecnologia
                                <span>
                                    ??? Avisos de indisponibilidade de rede<br/>
                                    ??? Alertas de sistemas
                                </span>
                            </p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <IconSolucaoFinancas/>
                            </div>
                            <p>
                                Finan??as
                                <span>
                                    ??? Avisos de cobran??a e vencimento<br/>
                                    ??? Confirma????o de pagamento<br/>
                                    ??? Boletos
                                </span>
                            </p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <IconSolucaoAtendimento/>
                            </div>
                            <p>
                                Atendimento
                                <span>
                                    ??? Retorno sobre suporte<br/>
                                    ??? Confirma????o de servi??os de cliente<br/>
                                    ??? Pesquisas de Mercado
                                </span>
                            </p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <IconSolucaoLogistica/>
                            </div>
                            <p>
                                Log??stica
                                <span>                            
                                    ??? Avisos sobre entrega de encomenda<br/>
                                    ??? Informa????es para equipe de log??stica<br/>
                                    ??? Confirma????es
                                </span>
                            </p>
                        </div>

                        <div className="item">
                            <div className="icon">
                                <IconSolucaoComunicacao/>
                            </div>
                            <p>
                                Comunica????o Interna
                                <span>                            
                                    ??? Avisos r??pidos para representantes e colaboradores<br/>
                                    ??? Campanhas de incentivo
                                </span>
                            </p>
                        </div>

                    </div>

                </div>

                <div className="to-center container">
                    <a className="btn orange" href={'/contato'}>Saiba mais sobre todas as possibilidades</a>
                </div>

            </div>

            <div id="cloud">

                <div className="container">

                    <h3>Plataforma em Nuvem. Estabilidade, seguran??a e baixos custos pra voc??.</h3>

                    <div className="text-link">
                        <p>
                            Investimentos em softwares, hardwares e infraestrutura por nossa conta, com Hospedagem robusta e confi??vel.
                        </p>
                        <Link className="btn outline white" to={'/contato'}>Saiba mais</Link>
                    </div>

                </div>

            </div>

            <div id="vantagens">

                <div className="container">
                    <div className="search-table-outter ">
                        <div className="table">

                            <div className="thead">
                                <div>CARACTER??STICAS</div>
                                <div className="center">CONCORRENTES</div>
                                <div className="center"><Logo width={110} height={30}/></div>
                            </div>

                            <div className="tbody">

                                <div className="tr">
                                    <div>
                                        Livre da instala????o de Hardwares ou Softwares
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Sistema Redundante
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Custo zero de implementa????o
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Custo zero de manuten????es e atualiza????es
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Relat??rios on-line
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Programa????o via WEB
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Fast Track - nova campanha em 30 segundos
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Relat??rios on-line
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Controle de Qualidade e Entrega
                                    </div>
                                    <div className="center"><IconVantagemTableTimes/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Campanha de ??udio simples
                                    </div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                                <div className="tr">
                                    <div>
                                    Campanhas interativas
                                    </div>
                                    <div className="center"><IconVantagemTableCircle/></div>
                                    <div className="center"><IconVantagemTableCheck/></div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <a className="btn orange container" href={'/contato'}>Solicite um or??amento!</a>

            </div>

            <Footer/>

        </div>
    )

}