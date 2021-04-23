import React from 'react';
import {maskCpf, maskPhone, maskPhone13, maskHour, maskInteger} from './Mask.js'
import './Input.scss'

import DatePicker from "react-datepicker"
import pt from 'date-fns/locale/pt-BR'
import "react-datepicker/dist/react-datepicker.css"
import { parseISO } from 'date-fns'

export function Input({
    name = "",
    value = "",
    className = "",
    type = "text",
    label = null,
    icon = null,
    disabled = false,
    min = null,
    max = null,
    onChange = (name, value) => {}
}){
    
    function handleChange(value){
        if( type === "cpf" ) value = maskCpf(value)
        if( type === "phone" ) value = maskPhone(value)
        if( type === "phone13" ) value = maskPhone13(value)
        if( type === "hour" ) value = maskHour(value)
        if( type === "integer" ) value = maskInteger(value)
        onChange(name, value)
    }

    return (
        <div className={`input ${className}`}>
            <input type={type}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                autoFocus={false}
                disabled={disabled}
                min={min}
                max={max}
            />
            {icon}
            <label className={`${value && "active"}`}>{label}</label>
        </div>
    );

};