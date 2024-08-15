export class PokemonService {
  static properties = {
    apiUrl: { type: String },
  };

  constructor() {
    this.apiUrl = 'http://localhost:3002/';
  }

  async getPokemons() {
    try {
      const response = await fetch(`${this.apiUrl}pokemon`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async getPokemon(id) {
    try {
      const response = await fetch(`${this.apiUrl}pokemon?id=${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async getPokemonName(name) {
    try {
      const response = await fetch(`${this.apiUrl}pokemon?name=${name}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
