import React from 'react';
import './Textarea.scss'

export function Textarea({
    name = "",
    value = "",
    className = "",
    label = null,
    maxLength = null,
    onChange = (name, value) => {}
}){
    
    function handleChange(value){
        onChange(name, value);
    }
    
    return (
        <div className={`textarea ${className} ${value && "active"}`}>
            <textarea value={value} onChange={(e) => handleChange(e.target.value)} maxLength={maxLength} />
            <label>{label}</label>
        </div>
    );

};