import React, {useState} from 'react'
import Header from "../../Components/Layout/Header";

import "./Contato.scss"

import { IconPhone, IconEmail } from '../../Components/ImagemSvg/ImagemSvg';

import Footer from '../../Components/Layout/Footer';
import {Input} from "../../Components/Form/Input/Input";
import {Textarea} from "../../Components/Form/Textarea/Textarea";
import Axios from "axios";
import messageStore from "../../Store/MessageStore";


export default function Contato(props)
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
        <>
            <div id="contato">
                <div id="header">
                    <Header />
                </div>
                <div className={'container-fluid page-effect'}>
                    <div className={'left'}>
                        <h2>Peça um orçamento agora mesmo!</h2>
                        <h3>
                            Faça um teste grátis na nossa plataforma! Fale conosco e saiba como.
                        </h3>
                        <p>
                            <IconPhone color={'#00DCC9'} /> +55 11 <b>3568-2843</b>
                            <br />
                            <IconEmail color={'#00DCC9'} /> <b>contato@eyou.com.br</b>
                        </p>
                    </div>
                    <div className={'right'}>
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
            
            <Footer/>
        </>
    )
}