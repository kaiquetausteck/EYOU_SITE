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
                <div className={'container-fluid'}>
                    <h3>Faça login nas nossas soluções pela</h3>
                    <IconTituloSolucoes width={243}/>
                    <p>Aqui você acessa todas as soluções que a Eyou oferece, 100% online. <b>Desejamos a você uma ótima experiência</b></p>

                    <div className={'categorias sms'}>
                        <div className={'titulo'}>
                            <IconProductSms color={'#597D8C'} />
                            <p>SMS</p>
                        </div>
                        <ul className={'nomes'}>
                            <li>
                                <IconServicosBalaoMensagem size={42} color={'#fff'} />
                                <p>SMS</p>
                            </li>
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
                            <li>
                                <IconServicosChaton size={42} color={'#fff'}/>
                                <p>Chaton</p>
                            </li>
                            <li>
                                <IconServicosChatbot size={42} color={'#fff'}/>
                                <p>Chatbot</p>
                            </li>
                            <li>
                                <IconServicosPush size={42} color={'#fff'}/>
                                <p>Push</p>
                            </li>
                            <li>
                                <IconServicosEmail size={42} color={'#fff'}/>
                                <p>E-mail</p>
                            </li>
                            <li>
                                <IconServicosHotPage width={42} color={'#fff'}/>
                                <p>Hotpage</p>
                            </li>
                            <li className={'inactive'}>
                                <IconServicosEnriquece size={42} color={'#4b4764'}/>
                                <p>Enriquece</p>
                            </li>
                            <li>
                                <IconServicosBoleto size={42} color={'#fff'}/>
                                <p>Boleto</p>
                            </li>
                            <li>
                                <IconServicosLinkCurto size={42} color={'#fff'}/>
                                <p>Link Curto</p>
                            </li>
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
                            <li>
                                <IconServicosWhatsappMassa size={42} color={'#fff'}/>
                                <p>WhatsApp Massa</p>
                            </li>
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