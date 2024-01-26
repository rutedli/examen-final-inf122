/* eslint-disable jsx-a11y/alt-text */
"use client"

import React from 'react';
import Image from 'next/image';
import style from './pokedex.module.css';
import { useEffect, useState } from 'react';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
    const url="https://pokeapi.co/api/v2/pokemon/40";
    useEffect(()=>{
        fetch(url)
    .then(res => res.json())
    .then(data => {
        setPokemon(data.sprites.front_default);
        setNombre(data.species.name);
        setType(data.types[0].type.name);
        if(data.types.length > 1){
          setType1(data.types[1].type.name);
        }
        setHeight(data.height);
        setWeight(data.weight);
        if(data.abilities.length > 0){
          setAbilities(data.abilities[0].ability.name);
        }
        if(data.abilities.length > 1){
          setAbilities1(data.abilities[1].ability.name);
        }
        if(data.abilities.length > 2){
          setAbilities2(data.abilities[2].ability.name);
        }
        setHp(data.stats[0].base_stat);
        setAttack(data.stats[1].base_stat);
        setDefense(data.stats[2].base_stat);
        setSpeed(data.stats[5].base_stat);
        });

    },[]);
    return (
        <div className={style.contenedor}>
          <h2 className={style.title}>My Pokemon</h2>
          <h1 className={style.title}>{capitalizeFirstLetter(nombre)}</h1>
          <div className={style.imageContainer}>
            <Image src={pokemon} height={150} width={150} />
          </div>
          <div className={style.about}>
            <h2 className={style.subtitle}>About</h2>
            <div>
              <strong>Type:</strong> {type}, {type1}
            </div>
            <div>
              <strong>Height:</strong> {height}m
            </div>
            <div>
              <strong>Weight:</strong> {weight}kg
            </div>
            <div>
              <strong>Abilities:</strong> {abilities}, {abilities1}, {abilities2}
            </div>
          </div>
          <div className={style.stats}>
            <h2 className={style.subtitle}>Stats</h2>
            <div className={style.stat}>
              <label>
                <strong>Hp:</strong>
              </label>
              <h1>{hp}</h1>
            </div>
            <div className={style.stat}>
              <label>
                <strong>Attack:</strong>
              </label>
              <h1>{attack}</h1>
            </div>
            <div className={style.stat}>
              <label>
                <strong>Defense:</strong>
              </label>
              <h1>{defense}</h1>
            </div>
            <div className={style.stat}>
              <label>
                <strong>Speed:</strong>
              </label>
              <h1>{speed}</h1>
            </div>
          </div>
        </div>
      );
}
 export default Poke;
