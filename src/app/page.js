"use client"

import Head from "next/head";
import { doLogin } from "./services/Web3Service";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";

export default function Home() {

  const [message, setMessage] = useState("");
  const {push} = useRouter();
   
  function btnLoginClick(){
    setMessage("Conectando com a MetaMask, aguarde...");
    doLogin()
      .then(wallet => push("/timeline"))
      .catch(err => {
        console.error(err);
        setMessage(err.message);
      })    
  }

  return (
    <>
      <Head>
        <title>CrypTwitter | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="widht=device-width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block mx-lg-auto img-fluid" width="700" height="500"/>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">CrypTwitter</h1>
            <p className="lead mb-3">Entre com a sua carteira, escreva suas mensagens e saiba o que está acontecendo no mundo!</p> 
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={btnLoginClick}>
                <img src="/MetaMask.svg" width="64" className="me-3" />              
                Conectar com a MetaMesk
              </button>               
            </div> 
            <p className="message">{message}</p>
          </div>          
        </div>
        <Footer />
      </div>      
    </>
  );
}
