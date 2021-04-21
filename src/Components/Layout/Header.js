import React from 'react'
import { Link } from 'react-router-dom'
import { IconYoutube, IconLinkedin, IconInstagram, Logo } from '../ImagemSvg/ImagemSvg'

import "./Header.scss"

export default function Header()
{

    return(
        <header>
            <div className="head-social">
                <div className="container">
                    <span>
                        + 55 11 3568 2843 <b>|</b> contato@eyou.com.br
                    </span>
                    <div className="social">
                        <a href="">
                            <IconYoutube/>
                        </a>
                        <a href="">
                            <IconLinkedin/>
                        </a>
                        <a href="">
                            <IconInstagram/>
                        </a>
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
                        <Link>
                            <span>
                                Compre créditos Eyou
                            </span>
                        </Link>
                    </li>
                </ul>

                <ul className="buttons">
                    <li>
                        <Link className="btn outline white">
                            CONTRATAR
                        </Link>
                    </li>
                    <li>
                        <Link className="btn secondary shadow">
                            ACESSAR SOLUÇÕES
                        </Link>
                    </li>
                </ul>

            </div>
        </header>
    )

}