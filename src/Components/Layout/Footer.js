import React from 'react'
import { IconInstagram, IconLinkedin, IconYoutube, LogoLetra } from '../ImagemSvg/ImagemSvg'

import "./Footer.scss"

import FooterLp1 from '../../Images/footerlp-1.png'
import FooterLp2 from '../../Images/footerlp-2.png'
import FooterLp3 from '../../Images/footerlp-3.png'

export default function Footer()
{

    return(
        <footer>

            <div className="container">

                <div className="left">

                    <div className="row">

                        <LogoLetra/>

                        <div className="social">
                            <a><IconYoutube/></a>                    
                            <a><IconLinkedin/></a>
                            <a><IconInstagram/></a>
                        </div>

                    </div>

                    <div className="menu">

                        <p>Sobre</p>

                        <ul>
                            <li>
                                <a href="/quem-somos">
                                    Diferencial
                                </a>
                            </li>
                            <li>
                                <a href="/quem-somos">
                                    Plataforma em Cloud
                                </a>
                            </li>
                            <li>
                                <a href="/quem-somos">
                                    Integração
                                </a>
                            </li>
                            <li>
                                <a href="/quem-somos">
                                    Possibilidade de Aplicação
                                </a>
                            </li>
                            <li>
                                <a href="/quem-somos">
                                    Converção e Venda
                                </a>
                            </li>
                            <li>
                                <a href="/quem-somos">
                                    Vantagens Eyou
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="menu">

                        <p>Serviços</p>

                        <ul>
                            <li>
                                <a href="/servicos">
                                    SMS
                                </a>
                            </li>
                            <li>
                                <a href="/servicos">
                                    Apps
                                </a>
                            </li>
                            <li>
                                <a href="/servicos">
                                    Telefonia
                                </a>
                            </li>
                            <li>
                                <a href="/servicos">
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="/servicos">
                                    Impressos
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="menu">

                        <p>Contato</p>

                        <ul>
                            <li>
                                <a href="/contato">
                                    +55 11 3568-2843
                                </a>
                            </li>
                            <li>
                                <a href="contato">
                                    contato@eialerta.com.br
                                </a>
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