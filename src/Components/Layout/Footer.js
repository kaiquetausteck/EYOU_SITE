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
                                <a href="">
                                    Diferencial
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Plataforma em Cloud
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Integração
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Possibilidade de Aplicação
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Converção e Venda
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Vantagens Eyou
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="menu">

                        <p>Serviços</p>

                        <ul>
                            <li>
                                <a href="">
                                    SMS
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Apps
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Telefonia
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Impressos
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="menu">

                        <p>Contato</p>

                        <ul>
                            <li>
                                <a href="">
                                    +55 11 3568-2843
                                </a>
                            </li>
                            <li>
                                <a href="">
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