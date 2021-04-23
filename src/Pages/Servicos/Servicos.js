import React from 'react'
import Header from "../../Components/Layout/Header";
import { IconChart, IconCheck, IconClock, IconCloud, IconServicosMedalha, IconCoin, IconDoubleCheck, IconPeople, IconApi, IconServicosBlacklist, IconShield, IconSupport, IconTemplate, Logo, IconBlocklist, IconServicosSMSBanner, IconServicosTitulo, IconServicosConversa, IconServicosFolhaComRelogio, IconServicosGlobo, IconServicosBalaoLapis, IconServicosIosAndroid, IconServicosAltaReceptividade, IconServicosAppsBanner, IconServicosChaton, IconServicosChatbot, IconServicosPush, IconServicosEmail, IconServicosEnriquece, IconServicosBoleto, IconServicosLinkCurto, IconServicosWpBanner, IconServicosMapa, IconServicosCelularRelogio, IconServicosWhatsapp, IconServicosWhatsappMassa, IconServicosWhatsappConsulta, IconServicosChatbotBanner, IconServicosCheckTrue } from '../../Components/ImagemSvg/ImagemSvg';
import "./Servicos.scss"
import LogoEYou from "./LogoEYou.png"
import { Link } from 'react-router-dom';
import Footer from "../../Components/Layout/Footer";

export default function Servicos(props)
{

    return(
        <>
        <div id="servicos">

            <div id="header">

                <Header />

                <div id="banner" className="page-effect">

                    <div className="container">
                        
                        <div className="text">

                            <h3>Serviços Eyou</h3>
                            
                            <p>
                                Não vendemos produtos. Oferecemos <b>soluções customizadas que abrangem todos os canais de comunicação possíveis</b> com seu público alvo.
                            </p>

                            <Link className="btn" to={'/contato'}>AGENDE UM TESTE GRÁTIS</Link>

                        </div>
                    </div>

                </div>

            </div>

            <div id="featureds">

                <div className="group">
                    <div className="top">
                        <div className="banner">
                            <IconServicosSMSBanner/>
                        </div>
                        <div className="text">
                            <div className="title">
                                <IconServicosTitulo/>
                                <span>SMS</span>
                            </div>
                            <p>Comunique-se com 234 milhões de celulares no Brasil e<br/>5 bilhões de aparelhos no mundo.</p>
                            <div className="items">
                                <div className="item">
                                    <IconServicosMedalha/>
                                    <p>100% dos celulares recebem</p>
                                </div>
                                <div className="item">
                                    <IconServicosConversa/>
                                    <p>99% das mensagens são entregues</p>
                                </div>
                                <div className="item">
                                    <IconServicosFolhaComRelogio/>
                                    <p>90% abertos em até 3 minutos</p>
                                </div>
                                <div className="item">
                                    <IconServicosGlobo/>
                                    <p>5 bilhões de Celulares no Mundo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="title">
                            SOLUÇÕES <br/>DESSE CANAL
                        </div>
                        <div className="items">
                            <div className="item">
                                <IconServicosConversa/>
                                <span>SMS</span>
                            </div>
                            <div className="item">
                                <IconServicosBalaoLapis color={'#b3c1c7'}/>
                                <span>Messaging</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="top reverse">
                        <div className="banner">
                            <IconServicosAppsBanner/>
                        </div>
                        <div className="text">
                            <div className="title">
                                <IconServicosTitulo/>
                                <span>APPS</span>
                            </div>
                            <p>Modernize a comunicação da sua empresa marcando presença em 100% dos smartphones.</p>
                            <div className="items">
                                <div className="item">
                                    <IconServicosMedalha/>
                                    <p>Esteja em 100% dos smartphones</p>
                                </div>
                                <div className="item">
                                    <IconServicosIosAndroid/>
                                    <p>IOS e Android</p>
                                </div>
                                <div className="item">
                                    <IconServicosAltaReceptividade/>
                                    <p>Alta receptividade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="title">
                            SOLUÇÕES <br/>DESSE CANAL
                        </div>
                        <div className="items">
                            <div className="item">
                                <IconServicosChaton color={'#597D8C'}/>
                                <span>Chaton</span>
                            </div>
                            <div className="item">
                                <IconServicosChatbot color={'#597D8C'}/>
                                <span>Chatbot</span>
                            </div>
                            <div className="item">
                                <IconServicosPush color={'#597D8C'}/>
                                <span>Push</span>
                            </div>
                            <div className="item">
                                <IconServicosEmail color={'#597D8C'} />
                                <span>E-mail</span>
                            </div>
                            <div className="item">
                                <IconServicosEnriquece color={'#b3c1c7'}/>
                                <span>Enriquece</span>
                            </div>
                            <div className="item">
                                <IconServicosBoleto color={'#597D8C'} />
                                <span>Boleto</span>
                            </div>
                            <div className="item">
                                <IconServicosLinkCurto color={'#597D8C'}/>
                                <span>Link Curto</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="top">
                        <div className="banner">
                            <IconServicosWpBanner/>
                        </div>
                        <div className="text">
                            <div className="title">
                                <IconServicosTitulo/>
                                <span>Whatsapp e Telefonia</span>
                            </div>
                            <p>Esteja no aplicativo mais usado pelos brasileiros e utilize os celulares a favor da sua marca.</p>
                            <div className="items">
                                <div className="item">
                                    <IconServicosMapa/>
                                    <p>127 Milhões de usuários no Brasil</p>
                                </div>
                                <div className="item">
                                    <IconServicosConversa/>
                                    <p>92% das mensagens são entregues</p>
                                </div>
                                <div className="item">
                                    <IconServicosCelularRelogio/>
                                    <p>86% abertas em até 3 minutos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="title">
                            SOLUÇÕES <br/>DESSE CANAL
                        </div>
                        <div className="items">
                            <div className="item">
                                <IconServicosWhatsapp color={'#b3c1c7'}/>
                                <span>WhatsApp</span>
                            </div>
                            <div className="item">
                                <IconServicosWhatsappMassa color={'#597D8C'}/>
                                <span>WhatsApp Massa</span>
                            </div>
                            <div className="item">
                                <IconServicosWhatsappConsulta color={'#b3c1c7'}/>
                                <span>WhatsApp Consulta</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="top reverse">
                        <div className="banner">
                            <IconServicosChatbotBanner/>
                        </div>
                        <div className="text">
                            <div className="title">
                                <IconServicosTitulo/>
                                <span>CHATBOT</span>
                            </div>
                            <p>Reduza custos e aumente expressivamente a comunicação com seu público-alvo, sem mexer na sua infraestrutura</p>
                            <div className="items">
                                <div className="item">
                                    <IconServicosMedalha/>
                                    <p>Auto negociações</p>
                                </div>
                                <div className="item">
                                    <IconServicosConversa/>
                                    <p>Aumento da receptividade da empresa</p>
                                </div>
                                <div className="item">
                                    <IconServicosFolhaComRelogio/>
                                    <p>Resolução de demandas automática</p>
                                </div>
                                <div className="item">
                                    <IconServicosGlobo/>
                                    <p>5 bilhões de Celulares no Mundo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="bigblue">

                <h4>Processo de venda automatizado</h4>

                <div className="container">
                    <div className="image">
                        <img src={LogoEYou} alt="Logo EYou" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>P.As recebem apenas clientes interessados</li>
                            <li>Alto índice de conversão</li>
                            <li>Alto volume de sucesso aumenta a auto estima dos operadores</li>
                            <li>Pequeno número de P.As percorrem um grande mailing de em menor espaço de tempo</li>
                            <li>Redução de custo na conversão</li>
                        </ul>
                    </div>
                </div>

                <Link className="btn orange container" to={'/contato'}>Faça já uma cotação</Link>
            </div>

            <div id="services">

                <h4>Diversos diferenciais que a Eyou oferece.</h4>
                
                <div className="group orange">

                    <div className="item">
                        <IconSupport/>
                        <p>
                            Suporte 24h, 7 dias por semana, 365 dias ao ano
                        </p>
                    </div>

                    <div className="item">
                        <IconCoin/>
                        <p>
                            Pague apenas pelo que for entregue aos seus clientes
                        </p>
                    </div>

                    <div className="item">
                        <IconCheck/>
                        <p>
                        Filtragem junto à Anatel, evitando envios para destinatários inativos
                        </p>
                    </div>

                    <div className="item">
                        <IconApi />
                        <p>
                        Integração por Lote, Unicos, Interface Web, FTP, Lote, HTTP e SMPP
                        </p>
                    </div>

                </div>

                <div className="group secondary">

                    <div className="item">
                        <IconPeople/>
                        <p>
                        Equipe de Operações Exclusiva para os clientes que não possuem equipe própria
                        </p>
                    </div>

                    <div className="item">
                        <IconDoubleCheck/>
                        <p>
                            SLA de 98% de taxa de entrega, com DLR
                        </p>
                    </div>

                    <div className="item">
                        <IconChart/>
                        <p>
                            Relatórios On-Line e em Real-Time
                        </p>
                    </div>

                    <div className="item">
                        <IconTemplate/>
                        <p>
                            Alta capacidade de Customização
                        </p>
                    </div>

                </div>

                <div className="group primary">

                    <div className="item">
                        <IconBlocklist />
                        <p>
                        Blacklist e neutralização de disparos duplicados
                        </p>
                    </div>

                    <div className="item">
                        <IconCloud/>
                        <p>
                        Enriquecimento da sua Base com as Operadoras dos clientes
                        </p>
                    </div>

                    <div className="item">
                        <IconClock/>
                        <p>
                        Plataforma com servidores exclusivos por cliente. Máxima performance e fila de envio sem concorrência
                        </p>
                    </div>

                    <div className="item">
                        <IconShield/>
                        <p>
                        POP’s de Backup que garantem o fornecimento em todo o Brasil.
                        </p>
                    </div>

                </div>

            </div>

            <div id="bigtable">
                <h4>Soluções inteligentes em Comunicação com foco no Mercado Digital</h4>
                <p>Potencialize seus negócios, simplificando e maximizando a rentabilidade de seus projetos,<br/> integrando mais tecnologia à rotina da sua empresa</p>
                <div className="search-table-outter ">
                    <table>
                        <tr>
                            <th className="left">COMPARATIVO ENTRE OS MEIOS DE COMUNICAÇÃO</th>
                            <th>E-mail</th>
                            <th>Torpedo SMS</th>
                            <th>Torpedo de Voz</th>
                            <th>Mala Direta</th>
                            <th>PA | Callcenter</th>
                        </tr>
                        <tr>
                            <td className="left">Agendamento para Envio</td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">Atinge fones fixo e celular</td>
                            <td></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">Cobrança apenas das mensagens entregues	</td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="left">Criação de Menus Interativos	</td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="left">Custo por interação com o cliente final (R$)	</td>
                            <td>0,025</td>
                            <td>0,03 a 0,12</td>
                            <td>0,05 a 0,20</td>
                            <td>2,30</td>
                            <td>8,50</td>
                        </tr>
                        <tr>
                            <td className="left">Escalonável</td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="left">FeedBack Instantâneo	</td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">Garantia de Entrega	</td>
                            <td></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">Identificação de Caixa Postal	</td>
                            <td></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">Integração Webservices e HTTP	</td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="left">Interativo</td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="left">Interface Web	</td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="left">Investimento em Infra	</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">Não precisa de Opt-in	</td>
                            <td></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">Performance por Recursos / Hora	</td>
                            <td>10.000</td>
                            <td>500.000</td>
                            <td>200.000</td>
                            <td>100.000</td>
                            <td>60</td>
                        </tr>
                        <tr>
                            <td className="left">Relatório On Line e Real Time	</td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">SLA de Serviço	</td>
                            <td></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                        <tr>
                            <td className="left">Transferência para Call Center	</td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                            <td><IconServicosCheckTrue /></td>
                            <td></td>
                            <td><IconServicosCheckTrue /></td>
                        </tr>
                    </table>
                </div>

                <p><b>Vamos encontrar juntos a sua solução customizada ideal</b></p>
                <Link className="btn orange container" to={'/contato'}>Fale conosco</Link>
            </div>
        </div>
        <Footer/>
        </>
    )

}