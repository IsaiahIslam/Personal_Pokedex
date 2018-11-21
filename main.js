class Pokemon {
  constructor (name, hp, attack, defense, ability) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
    this.container = document.getElementById('pokemons');
    this.element = document.createElement("div");
    this.element.className = 'poke_products';
  }

  display(){
    let name1 = document.getElementById('name1');
    name1.innerHTML = "Name: " + this.name;

    let hp1 = document.getElementById('HP1');
    hp1.innerHTML = "HP: " + this.hp;

    let attack1 = document.getElementById('Attack1');
    attack1.innerHTML = "Attack: " + this.attack;

    let defense1 = document.getElementById('Defense1');
    defense1.innerHTML = "Defense: " + this.defense;

    let ability1 = document.getElementById('Ability1');
    ability1.innerHTML = "Ability: " + this.ability;


    let name2 = document.getElementById('name2');
    name2.innerHTML = "Name: " + this.name;

    let hp2 = document.getElementById('HP2');
    hp2.innerHTML = "HP: " + this.hp;

    let attack2 = document.getElementById('Attack2');
    attack2.innerHTML = "Attack: " + this.attack;

    let defense2 = document.getElementById('Defense2');
    defense2.innerHTML = "Defense: " + this.defense;

    let ability2 = document.getElementById('Ability2');
    ability2.innerHTML = "Ability: " + this.ability;


    let name3 = document.getElementById('name3');
    name3.innerHTML = "Name: " + this.name;

    let hp3 = document.getElementById('HP3');
    hp3.innerHTML = "HP: " + this.hp;

    let attack3 = document.getElementById('Attack3');
    attack3.innerHTML = "Attack: " + this.attack;

    let defense3 = document.getElementById('Defense3');
    defense3.innerHTML = "Defense: " + this.defense;

    let ability3 = document.getElementById('Ability3');
    ability3.innerHTML = "Ability: " + this.ability;
  }
}

class Trainer {
  constructor(pokemon) {
    this.pokemon = [];
  }

  all () {
    return this.pokemon
  }

  get (name) {
    for (let i = 0; i < this.pokemon.length; i++) {
      if (name === this.pokemon.length[i].name) {
        return this.pokemon[i];
      }
    }
  }
}

let gallade_name;
let gallade_hp;
let gallade_attack;
let gallade_defense;
let gallade_ability;
axios.get("http://fizal.me/pokeapi/api/v2/name/gallade.json")
  .then(gallade)
  function gallade(response){
    gallade_name = response.data.species.name;
    gallade_hp = response.data.stats[5].base_stat;
    gallade_attack = response.data.stats[4].base_stat;
    gallade_defense = response.data.stats[3].base_stat;
    gallade_ability = response.data.abilities[0].ability.name
    console.log(response.data);
    console.log(gallade_name);
    console.log(gallade_attack);
  }

let lucario_name;
let lucario_hp;
let lucario_attack;
let lucario_defense;
let lucario_ability;
axios.get("http://fizal.me/pokeapi/api/v2/name/lucario.json")
  .then(lucario)
  function lucario(response){
    lucario_name = response.data.species.name;
    lucario_hp = response.data.stats[5].base_stat;
    lucario_attack = response.data.stats[4].base_stat;
    lucario_defense = response.data.stats[3].base_stat;
    lucario_ability = response.data.abilities[0].ability.name
    console.log(response.data);
    console.log(lucario_name);
    console.log(lucario_attack);
  }

let absol_name;
let absol_hp;
let absol_attack
let absol_defense
let absol_ability
axios.get("http://fizal.me/pokeapi/api/v2/name/absol.json")
  .then(absol)
  function absol(response){
    absol_name = response.data.species.name;
    absol_hp = response.data.stats[5].base_stat;
    absol_attack = response.data.stats[4].base_stat;
    absol_defense = response.data.stats[3].base_stat;
    absol_ability = response.data.abilities[0].ability.name
    console.log(response.data);
    console.log(absol_name);
    console.log(absol_attack);
  }

    // let gallade_ability = response.data.abilities[0].ability.name;
    // console.log(gallade_ability);
    // for (let i = 0; i < response.data.abilities[i].ability.length; i++)
    //   let result = response.data.abilities[i].ability.name;


    gallade = new Pokemon(gallade_name, gallade_hp, gallade_attack, gallade_defense, gallade_ability,);
    gallade.display();

    lucario = new Pokemon(lucario_name, lucario_hp, lucario_attack, lucario_defense, lucario_ability,);
    lucario.display();

    absol = new Pokemon(absol_name, absol_hp, absol_attack, absol_defense, absol_ability,);
    absol.display();
