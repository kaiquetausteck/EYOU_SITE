import React from 'react'
import { IconInstagram, IconLinkedin, IconYoutube, LogoLetra } from '../ImagemSvg/ImagemSvg'

import "./Footer.scss"

import FooterLp1 from '../../Images/footerlp-1.png'
import FooterLp2 from '../../Images/footerlp-2.png'
import FooterLp3 from '../../Images/footerlp-3.png'
import { Link } from 'react-router-dom'

export default function Footer()
{

    return(
        <footer>

            <div className="container">
                
                <div className="left">

                    <div className="row">

                        <LogoLetra/>

                        <div className="social">
                            <a href="https://www.youtube.com/channel/UCPXFCil3E1ThIuJypnJurWA" target="_blank"><IconYoutube/></a>                    
                            <a href="https://www.linkedin.com/company/eyou/mycompany/?viewAsMember=true" target="_blank"><IconLinkedin/></a>
                            <a href="https://www.instagram.com/eyou360/" target="_blank"><IconInstagram/></a>
                        </div>

                    </div>

                    <div className="menu">

                        <p>Sobre</p>

                        <ul>
                            <li>
                                <a href="/servicos#services">
                                    Diferencial
                                </a>
                            </li>
                            <li>
                                <a href="/quem-somos#nuvem">
                                    Plataforma em Cloud
                                </a>
                            </li>
                            <li>
                                <a href="/quem-somos#integracao">
                                    Integração
                                </a>
                            </li>
                            <li>
                                <a href="/#solucoes">
                                    Possibilidade de Aplicação
                                </a>
                            </li>
                            <li>
                                <a href="/servicos#bigblue">
                                    Converção e Venda
                                </a>
                            </li>
                            <li>
                                <a href="/#vantagens">
                                    Vantagens Eyou
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="menu">

                        <p>Serviços</p>

                        <ul>
                            <li>
                                <a href="/servicos#sms">
                                    SMS
                                </a>
                            </li>
                            <li>
                                <a href="/servicos#apps">
                                    Apps
                                </a>
                            </li>
                            <li>
                                <a href="/servicos#chatbot">
                                    Chatbot
                                </a>
                            </li>
                            <li>
                                <a href="/servicos#whatsapp">
                                    Telefonia
                                </a>
                            </li>
                            <li>
                                <a href="/servicos#whatsapp">
                                    WhatsApp
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="menu">

                        <p>Contato</p>

                        <ul>
                            <li>
                                <Link to="/contato">
                                    +55 11 3568-2843
                                </Link>
                            </li>
                            <li>
                                <Link to="contato">
                                    contato@eyou.com.br
                                </Link>
                            </li>
                        </ul>

                        <p style={{marginTop: 5}}>POLÍTICAS DE PRIVACIDADE</p>

                    </div>


                </div>

                <div className="right">
                    <img width={114} src={FooterLp1}/>
                    <img width={110} src={FooterLp3}/>
                    <img width={42} src={FooterLp2}/>
                </div>

            </div>

            <div className="powered">

                <div className="container">
                    <span>
                        <b>© 2021 Eyou.</b> Todos os direitos reservados
                    </span>
                    <span>
                        Produzido por <a href="https://tropa.digital" target="_blank">Tropa Digital</a> e <a href="http://somocollab.com.br/" target="_blank">SOMO COLLAB</a>
                    </span>
                </div>

            </div>

        </footer>
    )

}