"use client"

import Head from "next/head";
import NewTweet from "@/components/NewTweet";
import Tweet from "@/components/Tweet";
import { getLastTweets } from "../services/Web3Service";
import { useState, useEffect } from "react";
import Footer from "@/components/footer";

export default function Timeline(){

    const [tweets, setTweets] = useState([]);
    const [page, setPage] = useState(1);

    async function loadTweets(page = 1){

        try{
            const results = await getLastTweets(page);
            if(page > 1){
                tweets.push(...results);
                setTweets(tweets).reverse();
            }
            else
                setTweets(results.reverse());
        }
        catch(err){
            console.error(err);
            alert(err.message);
        }
    }
    
    useEffect(() => {
        loadTweets(page);
    }, [page])

    function btnLoadMore(){
        setPage(page + 1);
    }

    return(
        <>
             <Head>
                <title>CrypTwitter | CripTweets</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="widht=device-width, initial-scale=1"/>
            </Head>
            <div className="container px-4 py-5">
                <div className="layout">
                    <NewTweet /> 
                    {
                        tweets && tweets.length
                        ? tweets.map(t => <Tweet key={Number(t.timestamp)} data={t} />)
                        : <p>Nada para ver aqui. Faça o primeiro CrypTweet.</p>
                    }
                    {
                        tweets.length > 0 && tweets.length % 10 === 0
                            ? (
                                <div className="center">
                                    <input type="button" className="btn btn-primary" value="Carregar mais CrypTweets" onClick={btnLoadMore}/>
                                </div>   
                            )
                            : <></>
                    }
                </div>
                <Footer />
            </div>
        </>
    )
}