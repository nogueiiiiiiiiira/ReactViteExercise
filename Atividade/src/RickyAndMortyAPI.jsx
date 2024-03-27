import Menu from "./components/Menu";
import React from 'react';

import { useEffect } from "react";
import { useState } from "react"
import Card from "./components/Card";
import { apiRMCharacters } from "./api/server"
import style from './RickyAndMortyAPI.module.css'

export const RickAndMortyAPI = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setName] = useState()

    useEffect(() => {
        apiRMCharacters.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            if(!response.data.results){
                console.log("Array vazio!")
            } 
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === "404"){
                console.log("Personagem não encontrado!")
            }
            if(error.response.status === "500"){
                console.log("Erro de conexão!")
            }
            console.error(error)
        })
    }, [page, searchName])

    return(
        <div className={style.wrapRickyAndMorty}>
            <Menu/>
            <h1>RICKY AND MORTY API</h1>
            <input type="text" placeholder="Digite uma página: (1/42) " value={page} onChange = {(event) => setPage(event.target.value)}/>
            <input type="text" placeholder="Digite um nome: " value={searchName} onChange = {(event) => setName(event.target.value)}/>
            <br />
            <section className={style.cardsRickyAndMorty} >
                {data.map((character) => {
                    return(
                    <>
                    <Card
                        title = {character.name}
                        desc = {character.species}
                        value =  {character.status === "Alive" ? <div style = {{background: "green"}}> Vivo </div> 
                        : character.status === "Dead" ? <div style = {{background: "red"}} > Morto </div>
                        : <div style = {{background: "grey"}} > Desconhecido </div>}
                        imgSrc = {character.image}
                    />     

                    </>
                    )    
                })}
                
            </section>
        </div>
    )
}
