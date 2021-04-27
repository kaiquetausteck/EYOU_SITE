import React, {useState} from 'react'
import Header from "../../Components/Layout/Header";

import "./Solucoes.scss"

import {
    IconProductSms,
    IconProductTelephony,
    IconProductWhatsapp,
    IconProductApps,
    IconServicosBalaoMensagem,
    IconServicosBalaoLapis,
    IconServicosChaton,
    IconServicosChatbot,
    IconServicosPush,
    IconServicosEmail,
    IconServicosEnriquece,
    IconServicosBoleto,
    IconServicosLinkCurto,
    IconServicosWhatsapp,
    IconServicosWhatsappMassa,
    IconServicosWhatsappConsulta,
    IconServicosVoip,
    IconServicosHigienizacao,
    IconServicosMensagemVoz,
    IconServicosPortabilidade,
    IconServicosHotPage,
    IconTituloSolucoes

} from '../../Components/ImagemSvg/ImagemSvg';

import Footer from '../../Components/Layout/Footer';


export default function Solucoes(props)
{
    const [load, setLoad] = useState(false)
    const [DTO, setDTO] = useState({
        nome: '',
        empresa: '',
        email: '',
        telefone: '',
        mensagem: ''
    })

    function handleOnChange(name, value)
    {
        DTO[name] = value
        setDTO({...DTO})
    }

    return(
        <>
            <div id="soluc">
                <div id="header">
                    <Header />
                </div>
                <div className={'container-fluid page-effect'}>
                    <h3>Faça login nas nossas soluções pela</h3>
                    <IconTituloSolucoes width={243}/>
                    <p>Aqui você acessa todas as soluções que a Eyou oferece, 100% online. <b>Desejamos a você uma ótima experiência</b></p>

                    <div className={'categorias sms'}>
                        <div className={'titulo'}>
                            <IconProductSms color={'#597D8C'} />
                            <p>SMS</p>
                        </div>
                        <ul className={'nomes'}>
                            <a target="_blank" href="https://sms.eyou.com.br/">
                                <li>
                                        <IconServicosBalaoMensagem size={42} color={'#fff'} />
                                        <p>SMS</p>
                                </li>
                            </a>
                            <li className={'inactive'}>
                                <IconServicosBalaoLapis size={42} color={'#4b4764'}/>
                                <p>Messaging</p>
                                <span>EM BREVE</span>
                            </li>
                        </ul>
                    </div>
                    <div className={'categorias apps'}>
                        <div className={'titulo'}>
                            <IconProductApps width={39} color={'#597D8C'}  />
                            <p>APPS</p>
                        </div>
                        <ul className={'nomes'}>

                            <a href="https://chaton.eialerta.com.br/eialerta/operator/login" target="_blank">
                                <li>
                                    <IconServicosChaton size={42} color={'#fff'}/>
                                    <p>Chaton</p>
                                </li>
                            </a>

                            <a href="https://eialerta.eiwhats.com/login" target="_blank">
                                <li>
                                    <IconServicosChatbot size={42} color={'#fff'}/>
                                    <p>Chatbot</p>
                                </li>
                            </a>

                            <a href="https://push.eialerta.com.br/login" target="_blank">
                                <li>
                                    <IconServicosPush size={42} color={'#fff'}/>
                                    <p>Push</p>
                                </li>
                            </a>

                            <a href="https://email.eialerta.com.br/eialerta/s/login" target="_blank">
                                <li>
                                    <IconServicosEmail size={42} color={'#fff'}/>
                                    <p>E-mail</p>
                                </li>
                            </a>

                            <a href="https://hotpage.eialerta.com.br/eialerta/s/login" target="_blank">
                                <li>
                                    <IconServicosHotPage width={42} color={'#fff'}/>
                                    <p>Hotpage</p>
                                </li>
                            </a>

                            <li className={'inactive'}>
                                <IconServicosEnriquece size={42} color={'#4b4764'}/>
                                <p>Enriquece</p>
                            </li>

                            <a href="https://boleto.eialerta.com.br/" target="_blank">
                                <li>
                                    <IconServicosBoleto size={42} color={'#fff'}/>
                                    <p>Boleto</p>
                                </li>
                            </a>

                            <a href="https://eion.us/login" target="_blank">
                                <li>
                                    <IconServicosLinkCurto size={42} color={'#fff'}/>
                                    <p>Link Curto</p>
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className={'categorias whats'}>
                        <div className={'titulo'}>
                            <IconProductWhatsapp color={'#597D8C'}  />
                            <p>WHATSAPP</p>
                        </div>
                        <ul className={'nomes'}>
                            <li className={'inactive'}>
                                <IconServicosWhatsapp size={42} color={'#4b4764'}/>
                                <p>WhatsApp</p>
                            </li>

                            <a href="https://zapzap.eialerta.com.br/" target="_blank">
                                <li>
                                    <IconServicosWhatsappMassa size={42} color={'#fff'}/>
                                    <p>WhatsApp Massa</p>
                                </li>
                            </a>
                            
                            <li className={'inactive'}>
                                <IconServicosWhatsappConsulta size={42} color={'#4b4764'}/>
                                <p>WhatsApp Consulta</p>
                            </li>
                        </ul>
                    </div>
                    <div className={'categorias tel'}>
                        <div className={'titulo'}>
                            <IconProductTelephony color={'#597D8C'}  />
                            <p>TELEFONIA</p>
                        </div>
                        <ul className={'nomes'}>
                            <li className={'inactive'}>
                                <IconServicosVoip width={42} color={'#4b4764'} />
                                <p>Voip</p>
                            </li>

                            <a href="" target="_blank">
                            </a>
                            <li>
                                <IconServicosMensagemVoz width={42} color={'#fff'} />
                                <p>Torpedo de Voz</p>
                            </li>
                            <li className={'inactive'}>
                                <IconServicosPortabilidade width={35} color={'#4b4764'} />
                                <p>Portabilidade</p>
                            </li>
                            <li className={'inactive'}>
                                <IconServicosHigienizacao width={35} color={'#4b4764'} />
                                <p>Higienização</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}