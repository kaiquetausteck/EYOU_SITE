import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IconYoutube, IconLinkedin, IconInstagram, Logo } from '../ImagemSvg/ImagemSvg'
import { BrowserView, MobileView } from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu';


import "./Header.scss"

export default function Header()
{

    const [opened, setOpened] = useState(false)

    return(
        <header >
            <div className="head-social">
                <div className="container">
                    <span>
                        + 55 11 3568 2843 <b>|</b> contato@eyou.com.br
                    </span>
                    <div className="social">
                        <a href="https://www.youtube.com/channel/UCPXFCil3E1ThIuJypnJurWA" target="_blank"><IconYoutube/></a>                    
                        <a href="https://www.linkedin.com/company/eyou/mycompany/?viewAsMember=true" target="_blank"><IconLinkedin/></a>
                        <a href="https://www.instagram.com/eyou360/" target="_blank"><IconInstagram/></a>
                    </div>
                </div>
            </div>
            <div className="head-menu container">

                <ul className="nav">
                    <li>
                        <Link to="/">
                            <Logo width={217} height={58}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/quem-somos">
                            <span>
                                Quem Somos
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicos">
                            <span>
                                Nossos Serviços
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contato'}>
                            <span>
                                Compre créditos Eyou
                            </span>
                        </Link>
                    </li>
                </ul>

                <ul className="buttons">
                    <li>
                        <Link to={'/contato'} className="btn outline white">
                            CONTRATAR
                        </Link>
                    </li>
                    <li>
                        <Link to={'/solucoes'} className="btn secondary shadow">
                            ACESSAR SOLUÇÕES
                        </Link>
                    </li>
                </ul>

                <MobileView>
                    <Menu right width={ '80%' }  >
                        <ul className="nav">
                            <li>
                                <Link to="/quem-somos">
                            <span>
                                Quem Somos
                            </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/servicos">
                            <span>
                                Nossos Serviços
                            </span>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/contato'}>
                            <span>
                                Compre créditos Eyou
                            </span>
                                </Link>
                            </li>
                        </ul>

                        <ul className="buttons">
                            <li>
                                <Link to={'/contato'} className="btn outline white">
                                    CONTRATAR
                                </Link>
                            </li>
                            <li>
                                <Link to={'/solucoes'} className="btn secondary shadow">
                                    ACESSAR SOLUÇÕES
                                </Link>
                            </li>
                        </ul>
                    </Menu>
                </MobileView>
            </div>

        </header>
    )

}