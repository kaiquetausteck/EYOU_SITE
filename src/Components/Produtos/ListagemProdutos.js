import React from 'react'

import "./ListagemProdutos.scss"

export default function ListagemProdutos()
{

    return(
        <div className="list-products">
                
            <div className="group">
                <div className="product orange">
                    <h2>SMS</h2>
                    <p className="description">
                        Alcance <b>234 milhões de celulares no Brasil</b>, com entrega de 99% e abertura em até 3 minutos
                    </p>
                    <p className="list">
                        OneWay<br/>TwoWay<br/>Flash<br/>Concatenado<br/>SMS Mundial<br/>Interativo<br/>Via CPF<br/>Messaging - RCS
                    </p>
                </div>

                <div className="product blue">
                    <h2>Apps</h2>
                    <p className="description">
                        Modernize sua comunicação com envio imediato paras <b>100% dos usuários de apps</b>, sejam Android ou IOS.
                    </p>
                    <p className="list">
                        Push<br/>Boletos / PIX<br/>Hotsite<br/>LInks curtos<br/>Enriquecimento<br/>E-mail<br/>Chat online
                    </p>
                </div>
            </div>

            <div className="group">
                <div className="product green">
                    <h2>WhatsApp</h2>
                    <p className="description">
                        <b>Use o aplicativo mais presente no dia a dia dos clientes a seu favor</b>, com possibilidade de comunicação em tempo real.
                    </p>
                    <p className="list">
                        Atendimento<br/>Consulta<br/>Marketing
                    </p>
                </div>

                <div className="product purple">
                    <h2>Telefonia</h2>
                    <p className="description">
                        <b>Reduza custos e aumente expressivamente a comunicação</b> com seu público-alvo, sem mexer na sua infraestrutura.
                    </p>
                    <p className="list">
                        Higienização<br/>Torpedo de voz<br/>VoIP
                    </p>
                </div>
            </div>

            <div className="group">
                <div className="product red">
                    <h2>Chatbot</h2>
                    <p className="description">
                        <b>Reduza custos e aumente expressivamente a comunicação</b> com seu público-alvo, sem mexer na sua infraestrutura.
                    </p>
                    <p className="list">
                        SMS<br/>WhatsApp<br/>Chat Online
                    </p>
                </div>
            </div>
    
        </div>
    )

}