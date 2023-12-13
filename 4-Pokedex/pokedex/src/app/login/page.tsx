'use client'
import { ChangeEvent, useState } from 'react'
import styles from './style.module.css'




export default function Login(){
    const [formData, setFormData]= useState({'email': '', 'password': ''})
    
    function updateForm(e: ChangeEvent){
        const {name, value} = e.target
        
        setFormData({...formData, [name]: value})
    }

    async function getToken(){
        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
          
        const sendForm = await fetch('http://localhost:3000/api/user/login', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: new Headers(headerDict)
        })
        .then(response => response.json())
        .then(data => console.log(data))

    }

    return (
        <div className={styles.login_screen}>
            <div className={styles.login_container}>
                <div className={styles.title_container}>
                    <h2>Login</h2>
                </div>
                <form className={styles.form}>
                    <label className={styles.form_label} htmlFor='email'>Email</label>
                    <input className={styles.form_input} onChange={e => updateForm(e)} name='email' id="email" type="email" placeholder="Digite seu email" />
                    <label className={styles.form_label} htmlFor='password'>Senha</label>
                    <input className={styles.form_input} onChange={e => updateForm(e)} name='password' id="password" type="password" placeholder="Digite sua senha" />
                </form>
                <div className={styles.button_container}>
                    <input className={styles.login_button} onClick={() => getToken()} type="submit" />
                </div>
            </div>
        </div>
    )
}

