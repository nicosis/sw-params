import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = () => {
  const [character, setCharacter] = useState([]);
  const [planet, setPlanet] = useState ([]);
  const [species, setSpecies] = useState ([]);
  
  
//   UseEffect con fetch para todas las variables de estado de: CHARACTERS, PLANETS, SPECIES
 
useEffect(() => {
  let getAllCharacters = {
	method: "GET",
	redirect: "follow"
  }
    fetch("https://www.swapi.tech/api/people/", getAllCharacters)
	.then((respuesta) => {respuesta.json()
    .then((results) => {setCharacter(results)})
    }).catch(error => {
		console.log(error, "este es el error");
  })

  let getAllPlanets = {
	method: "GET",
	redirect: "follow"
  }
    fetch("https://www.swapi.tech/api/planets/", getAllPlanets)
	.then((respuesta) => {respuesta.json()
    .then((data) => {setPlanet(data.results)})
    }).catch(error => {
		console.log(error, "este es el error");
  })

  let getAllSpecies = {
	method: "GET",
	redirect: "follow"
  }
    fetch("https://www.swapi.tech/api/species/", getAllSpecies)
	.then((respuesta) => {respuesta.json()
    .then((data) => {setSpecies(data.results)})
    }).catch(error => {
		console.log(error, "este es el error");
  })

}, [])

//   Las CARDS de CHARACTERS, PLANETS y SPECIES

 return (
    <>
	<div className="relative flex items-center">
		<div className="overflow-x-auto" style={{ maxWidth: '100vw' }}>
		<div className="overflow-x-scroll whitespace-nowrap flex flex-row">
			{character?.results?.map((element, key) =>{
				return (
					<>
					<div key={key} className="card-wrapper flex m-5">
						<img src={"https://starwars-visualguide.com/assets/img/characters/"+(key+1)+".jpg"} style={{width: '200px'}} alt='/' />
						<div className="card-body">
							<h3 className="card-title fw-bold">{element?.name}</h3>
							<p className="card-text">uid : {element?.uid}</p>
							<Link to={`/character/${element.uid}`}>
							<button className="btn-1 bg-primary">Learn more</button>
							</Link>
							<button className="btn-2 "><i className="fas fa-heart"></i></button>
					   </div>
					</div>
					</>
				)
			})}
          </div>
		</div>
	</div>


	
	</>
  );
 }


Cards.propTypes = {
  match: PropTypes.object,
};
