/* eslint-disable jsx-a11y/alt-text */
"use client"

import Image from "next/image";
import style from "./pokedex.module.css";
import { useEffect, useState } from "react";

function Poke(){
    const [pokemon,setPokemon]=useState("/vercel.svg");
    const [nombre, setNombre]=useState("esperando");
    const [type, setType]=useState("Tipo1");
    const [type1, setType1]=useState("Tipo2");
    const [height, setHeight]=useState("Tamaño");
    const [weight, setWeight]=useState("Peso");
    const [abilities, setAbilities]=useState("Hablidades");
    const [abilities1, setAbilities1]=useState("Hablidades");
    const [abilities2, setAbilities2]=useState("Hablidades");
    const [hp, setHp]=useState("Vida");
    const [attack, setAttack]=useState("Ataque");
    const [defense, setDefense]=useState("Defensa");
    const [speed, setSpeed]=useState("Velocidad");
    const url="https://pokeapi.co/api/v2/pokemon/wigglytuff";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPokemon(data.sprites.front_default),
            setNombre(data.species.name),
            setType(data.types[0].type.name),
            setType1(data.types[1].type.name),
            setHeight(data.height),
            setWeight(data.weight),
            setAbilities(data.abilities[0].ability.name),
            setAbilities1(data.abilities[1].ability.name),
            setAbilities2(data.abilities[2].ability.name),
            setHp(data.stats[0].base_stat),
            setAttack(data.stats[1].base_stat),
            setDefense(data.stats[2].base_stat),
            setSpeed(data.stats[5].base_stat)
        });

    },[]);
    return(
        <div className={style.contenedor}>
            <h2>My Pokemon</h2>
            <br/>
            <br/>
            <br/>
            <h1>{nombre}</h1>
            <Image src={pokemon} height={500} width={500} />
            
            <br/>
            <h2>About</h2>  
             <h1>type:{type},{type1}</h1>
             <h1>Height:{height}</h1>
             <h1>Weight:{weight}kg</h1>
             <h1>Abilities:{abilities}, {abilities1}, {abilities2}</h1>
            <br/>
            <h2>Stats</h2>
            <h1>Hp:{hp}</h1>
            <h1>Attack:{attack}</h1>
            <h1>Defense:{defense}</h1>
            <h1>Speed:{speed}</h1>
            
        </div>

    )
}
 export default Poke;
