import { LitElement } from 'lit';
import { PokemonService } from '../../../services/pokemon.service.js';

const pokemonService = new PokemonService();

export class DmPokemonComponent extends LitElement {
  static get properties() {
    return {
      pokemons: { type: Object },
    };
  }

  constructor() {
    super();
    this.pokemons = {};
  }

  _getPokemonSessionStorage() {
    try {
      const pokemonData = sessionStorage.getItem('pokemon');
      return pokemonData ? JSON.parse(pokemonData) : null;
    } catch (error) {
      console.error('Error parsing sessionStorage data', error);
    }
  }

  _setPokemonSessionStorage(data) {
    try {
      sessionStorage.setItem('pokemon', JSON.stringify(data));
    } catch (error) {
      console.error('Error setting sessionStorage data', error);
    }
  }

  getAllPokemon() {
    const pokemonSessionStorage = this._getPokemonSessionStorage();
    if (pokemonSessionStorage) {
      this._fireEvent('get-pokemon-success', pokemonSessionStorage);
    } else {
      pokemonService
        .getPokemons()
        .then(data => {
          this._setPokemonSessionStorage(data);
          this._fireEvent('get-pokemon-success', data);
        })
        .catch(error => {
          this._fireEvent('get-pokemon-failure', error);
        });
    }
  }

  getPokemon(id) {
    const pokemons = this._getPokemonSessionStorage();
    if (pokemons) {
      const pokemon = pokemons.find(item => item.id === id);
      if (pokemon) {
        this._fireEvent('get-pokemon-by-id-success', pokemon);
      } else {
        this._fireEvent('get-pokemon-by-id-failure', `Pokémon with id ${id} not found`);
      }
    } else {
      this._fireEvent('get-pokemon-by-id-failure', 'No Pokémon data found in sessionStorage');
    }
  }

  getPokemonByName(name) {
    const pokemons = this._getPokemonSessionStorage();
    if (pokemons) {
      const pokemon = pokemons.find(item => item.name === name);
      if (pokemon) {
        this._fireEvent('get-pokemon-by-name-success', [pokemon]);
      } else {
        this._fireEvent('get-pokemon-by-name-failure', `Pokémon with name ${name} not found`);
      }
    } else {
      this._fireEvent('get-pokemon-by-name-failure', 'No Pokémon data found in sessionStorage');
    }
  }

  updateEvolution(id, prevEvolution, newEvolution) {
    const pokemons = this._getPokemonSessionStorage();
    if (pokemons && pokemons.length) {
      const pokemon = pokemons.find(item => item.id === id);
      if (!pokemon) {
        this._fireEvent('update-pokemon-failure', `Pokémon with id ${id} not found`);
        return;
      }
      const evolutionIndex = pokemon.evolutions.findIndex(
        item => item.name === prevEvolution.name
      );
      if (evolutionIndex === -1) {
        this._fireEvent('update-pokemon-failure', `Evolution ${prevEvolution.name} not found in Pokémon with id ${id}`);
        return;
      }
      pokemon.evolutions[evolutionIndex] = newEvolution;
      this._setPokemonSessionStorage(pokemons);
      this._fireEvent('update-pokemon-success', pokemon);
    } else {
      this._fireEvent('update-pokemon-failure', 'No Pokémon data found in sessionStorage');
    }
  }

  _fireEvent(name, detail) {
    this.dispatchEvent(
      new CustomEvent(name, {
        bubbles: true,
        composed: true,
        detail,
      })
    );
  }
}
