import { pokemones } from "../utils/pokemones.js";
import crypto from 'crypto';

export const crearPokemon = async (req, res) => {
    try {
        const pokemon = req.body;

        if(!pokemon){
            res.status(400).json({
                message:"Pokémon no enviado",
                data: null
            })
        }
        pokemones.push(pokemon);

        res.status(201).json({
            message:"Pokémon creado exitosamente!",
            data: pokemon
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const obtenerPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = pokemones.find((pokemon) => pokemon.id == id)
        if(!pokemon){
            res.status(404).json({
                message: "Pokémon no encontrado",
                data: null
            })
            return;
        }

        res.status(200).json({
            message: "Pokémon encontrado!",
            data: pokemon
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const obtenerPokemones = async (req, res) => {
    try {
        res.status(200).json({
            message: "Lista de Pokémones",
            data: pokemones
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const pokemonAleatorio = async (req, res) => {
    try {
        const randomNum = crypto.randomInt(1, 4);
        const pokemon = pokemones.find((pokemon) => pokemon.id == randomNum)
        if(!pokemon){
            res.status(404).json({
                message: "Pokémon no encontrado",
                data: null
            })
            return;
        }
        
        res.status(200).json({
            message: "Pokémon aleatorio!",
            data: pokemon
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const modificarPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = req.body;
        const index = pokemones.findIndex((pokemon) => pokemon.id == id);

        if(index === -1){
            res.status(404).json({
                message:"Pokémon no encontrado",
                data: null
            })
            return;
        }

        pokemones[index] = pokemon
        console.log(pokemones[index])

        res.status(200).json({
            message: "Pokémon actualizado correctamente!",
            data: pokemon 
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const modificarParcialPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const pokemon = req.body;
        const index = pokemones.findIndex((pokemon) => pokemon.id == id);

        if(index === -1){
            res.status(404).json({
                message:"Pokémon no encontrado",
                data: null
            })
            return;
        }

        pokemones[index] = pokemon
        console.log(pokemones[index])

        res.status(200).json({
            message: "Pokémon actualizado correctamente!",
            data: pokemon 
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const eliminarPokemon = async (req, res) => {
    try {
        const id = req.params.id;
        const index = pokemones.findIndex((pokemon) => pokemon.id == id);
        if(index === -1){
            res.status(404).json({
                message:"Pokémon no encontrado",
                data: null
            })
            return;
        }

        const pokemonEliminado = pokemones.splice(index,1);

        res.status(200).json({
            message: "Pokémon eliminado correctamente!",
            data: pokemonEliminado
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};