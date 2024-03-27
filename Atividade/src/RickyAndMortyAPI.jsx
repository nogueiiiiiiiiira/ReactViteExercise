import Menu from "./components/Menu"
import React from 'react';

import { Card } from "./components/Card"
import { apiRMCharacters } from "./api/server"

import { useEffect } from "react";
import { useState } from "react"
 
export const RickAndMorty = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState("")
    const [searchName, setName] = useState()

    useEffect(() => {
        apiRMCharacters.get(`/character/?page=${page}&name=${searchName}`).then((response) => {
            if(!response.data.results){
            } 
            setData(response.data.results)
        }).catch((error) => {
            if(error.response.status === "404"){
            }
            if(error.response.status === "500"){
            }
            console.error(error)
        })
    }, [page, searchName])

    return(
        <div>
            <Menu/>
            <h1>Rick And Morty API</h1>
            <input type="text" placeholder="Digite uma página: (1/42) " value={page} onChange = {(event) => setPage(event.target.value)}/>
            <input type="text" placeholder="Digite um nome: " value={searchName} onChange = {(event) => setName(event.target.value)}/>
            <br />
            <section>
                {data.map((character) => {
                    return(
                    <>
                    <CardRickyAndMorty
                        name = {character.name}
                        desc = {character.species}
                        value =  {character.status === "Alive" ? <div style = {{background: "green"}}> Vivo </div> 
                        : character.status === "Dead" ? <div style = {{background: "red"}} > Morto </div>
                        : <div style = {{background: "grey"}} > Desconhecido </div>}
                        image = {character.image}
                    />     

                        created = {character.created}           

                    </>
                    )    
                })}
                
            </section>
        </div>
    )
}
