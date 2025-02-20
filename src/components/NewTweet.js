"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { addTweet } from "@/app/services/Web3Service";

export default function NewTweet(){

    const [text, setText] = useState("");
    const [message, setMessage] = useState("");

    function btnPublishClick(){
        setMessage("Enviando CrypTweet, aguarde...");
        addTweet(text)
            .then(result => {
                setText("");
                setMessage("CrypTweet enviado! Aguarde um instante para atualizar.");
            })
            .catch(err => {
                setMessage(err.message);
                console.error(err);
            })
    }

    useEffect(() => {
        const wallet = localStorage.getItem("wallet");
        if(!wallet)
            push("/");
    }, [])

    return (
        <>
            <div className="top">
                <div className="left">
                    <img src="twitter.svg" className="brand" />
                </div>
                <h1>
                    Bem vindo de volta!
                </h1>
                <p>O que está acontecendo?</p>          
                <textarea className="form-control my-3" value={text} onChange={evt => setText(evt.target.value)}>
                </textarea>
                <div>
                    <input type="button" onClick={btnPublishClick} className="btn btn-primary" value="Enviar" />
                    <span className="message">
                        {message}
                    </span>
                </div>                
            </div>            
        </>
    )
}