import React, { useEffect, useState } from 'react'
import { IconChart, IconTemplate, IconApi, IconCheck, IconCoin, IconDoubleCheck, IconFlag, IconInstagram, IconLinkedin, IconMedal, IconPeople, IconStar, IconSupport, IconYoutube, Logo, IconBlocklist, IconCloud, IconClock, IconShield, IconEyou, IconEyouFull, IconPhone, IconEmail, PersonForm, LogoLetra } from '../../Components/ImagemSvg/ImagemSvg'
import { InfoLandingPage } from '../../Components/ImagemSvg/svg/InfoLandingPage'
import { Input } from '../../Components/Form/Input/Input'
import { Textarea } from '../../Components/Form/Textarea/Textarea'
import messageStore from '../../Store/MessageStore'

import './LandingPage.scss'

import FooterLp1 from '../../Images/footerlp-1.png'
import FooterLp2 from '../../Images/footerlp-2.png'
import FooterLp3 from '../../Images/footerlp-3.png'
import FogueteFumaca from '../../Images/foguete.png'
import Axios from 'axios'
import ListagemProdutos from '../../Components/Produtos/ListagemProdutos'

export default function LandingPage(props)
{

    const [load, setLoad] = useState(false)

    useEffect(() => {

        var target = document.querySelector('#services')

        document.addEventListener('scroll', () => {

            var element = document.getElementById("foguete")

            if (window.scrollY >= target.getBoundingClientRect().top) {
                
                element.classList.add("active")

            } else {

                element.classList.remove("active")

            }
        })

    }, [])

    const [DTO, setDTO] = useState({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        mensagem: ''
    })

    function handleOnChange(name, value)
    {

        console.log(name, value)
        DTO[name] = value
        setDTO({...DTO})

    }

    async function handleSubmit(e)
    {

        try {

            if ( load === true ) throw "Aguarde enquanto enviamos seu formulario."

            setLoad(true)

            e.preventDefault()
            
            if ( !DTO.nome ) throw "Nome é obrigatório"
            if ( !DTO.empresa ) throw "Empresa é obrigatório"
            if ( !DTO.email ) throw "Email é obrigatório"
            if ( !DTO.telefone ) throw "Telefone é obrigatório"
            if ( !DTO.mensagem ) throw "Mensagem é obrigatório"

            const data = {
                to: 'teles@eyou.com.br',
                subject: 'Orçamento serviço',
                message: `Nome: ${DTO.nome}\nEmpresa: ${DTO.empresa}\nEmail: ${DTO.email}\nTelefone: ${DTO.telefone}\nMensagem: ${DTO.mensagem}\n `
            }

            var formdata = new FormData();
            formdata.append("to", data.to);
            formdata.append("subject", data.subject);
            formdata.append("message", data.message);

            const response = await Axios.post('https://api.eialerta.com.br/bin/frontClass', formdata, {
                headers: {
                    'Content-Type':'multipart/form-data'
                }
            })

            if ( response.data !== 'OK' ) throw "Não foi possivel enviar o contato."

            setDTO({
                nome: '',
                empresa: '',
                email: '',
                telefone: '',
                mensagem: ''
            })

            messageStore.addSuccess('Mensagem enviada com sucesso.')

            setLoad(false)

        } catch (err) {

            setLoad(false)
            messageStore.addError(err)

        }

    }

    return(
        <div id="landing-page">

            <div id="banner">

                <div id="header" className="container">

                    <div className="logo">
                        <Logo/>
                    </div>

                    <div className="nav-menu">

                        <a className="btn secondary shadow">Acessar o Site</a>

                        <div className="social">

                            <a><IconYoutube/></a>                    
                            <a><IconLinkedin/></a>
                            <a><IconInstagram/></a>
                            
                        </div>

                    </div>

                </div>

                <div id="infos" className="container">

                    <div className="text">
                        <h1>Uma <b>plataforma Multicanal</b> que conecta nossas soluções de <b>comunicação em massa</b> via Ommichanel!</h1>
                        <h4>Combinamos ferramentas modulares para reduzir custos, aumentar seus resultados e potencializar a comunicação do seu negócio.</h4>
                        <a className="btn orange" href="#contact">COMECE GRÁTIS</a>
                    </div>

                    <div className="image">
                        <InfoLandingPage/>
                    </div>

                </div>

            </div>

            <div id="products">

                <ListagemProdutos/>

                <a className="btn secondary send-contact" href="#contact">PEÇA JÁ UM ORÇAMENTO</a>

            </div>

            <div id="about">

                <h3>Comunicação feita por quem participa, desde o início <b>do desenvolvimento do Mercado.</b></h3>

                <div className="list">

                    <div className="box primary">
                        <IconFlag/>
                        <div>
                            <b>PIONEIRISMO</b>
                            <span>22 Anos de atuação</span>
                        </div>
                    </div>

                    <div className="box orange">
                        <IconMedal/>
                        <div>
                            <b>EXPERTISE</b>
                            <span>+190 CLIENTES</span>
                        </div>
                    </div>

                    <div className="box green">
                        <IconStar/>
                        <div>
                            <b>RESULTADOS</b>
                            <span>Foco do nosso negócio</span>
                        </div>
                    </div>

                </div>

            </div>

            <div id="services">

                <h4 className="container">Diversos diferenciais que a Eyou oferece.</h4>
                
                <div className="container">

                    <div id="foguete" className="foguete animate__animated">
                        <img src={FogueteFumaca}/>
                        <IconEyouFull/>
                    </div>
                    <div className="eyou-top">
                        <IconEyou/>
                    </div>
                    <div className="eyou-full-top">
                        <IconEyouFull/>
                    </div>

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
                            <IconApi/>
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
                                SLA de 98% de taxa  de entrega, com DLR
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
                            <IconBlocklist/>
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

            </div>

            <div id="contact">

                <div className="container">

                    <div className="form">

                        <div className="eyou-left">
                            <IconEyou/>
                        </div>

                        <div className="eyou-right">
                            <IconEyou/>
                        </div>

                        <div className="eyou-full-right">
                            <IconEyouFull/>
                        </div>

                        <div className="person-form">
                            <PersonForm/>
                        </div>

                        <div className="text">

                            <h5>Peça um orçamento agora mesmo!</h5>

                            <p>Faça um teste grátis na nossa plataforma! Fale conosco e saiba como.</p>

                            <ul>
                                <li>
                                    <IconPhone/>
                                    <span>
                                        +55 11 3568-2843
                                    </span>
                                </li>
                                <li>
                                    <IconEmail/>
                                    <span>
                                        contato@eyou.com.br
                                    </span>
                                </li>
                            </ul>

                        </div>

                        <form onSubmit={handleSubmit}>
                            <Input
                                label="Nome"
                                name="nome"
                                value={DTO.nome}
                                onChange={(name, value) => handleOnChange(name, value)}
                            />
                            <Input
                                label="Empresa"
                                name="empresa"
                                value={DTO.empresa}
                                onChange={(name, value) => handleOnChange(name, value)}
                            />
                            <Input
                                label="E-mail"
                                name="email"
                                value={DTO.email}
                                onChange={(name, value) => handleOnChange(name, value)}
                            />
                            <Input
                                type="phone"
                                label="Telefone"
                                name="telefone"
                                value={DTO.telefone}
                                onChange={(name, value) => handleOnChange(name, value)}
                            />
                            <Textarea
                                label="Mensagem"
                                name="mensagem"
                                value={DTO.mensagem}
                                onChange={(name, value) => handleOnChange(name, value)}
                            />

                            <button className="btn orange shadow">{load === true ? <i className="fa fa-cog fa-spin"></i> : 'Enviar'}</button>
                        </form>

                    </div>

                </div>

            </div>

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
                                        Converção e Venda
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Plataforma em Cloud
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Vantagens Eyou
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Integração
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Políticas de Privacidade
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        Possibilidade de Aplicação
                                    </a>
                                </li>
                            </ul>

                        </div>

                        <div className="menu unique">

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
                                        ChatBot
                                    </a>
                                </li>
                            </ul>

                        </div>

                    </div>

                    <div className="right">
                        <img src={FooterLp1}/>
                        <img src={FooterLp3}/>
                        <img src={FooterLp2}/>
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

        </div>
    )

}