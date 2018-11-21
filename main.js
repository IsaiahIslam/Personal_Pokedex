class Pokemon {
  constructor (pokeImage, name, hp, attack, defense, ability) {
    this.pokeImage = pokeImage;
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
    this.container = document.querySelector('#pokeStats');
    this.element = document.createElement("div");
    this.element.className = 'poke_products';

    display () {

  let pokeImage = document.getElementById('imgPlaceHolder');
  pokeImage.src = this.pokeImage;
  this.element.appendChild(pokeImage);
  this.container.appendChild(this.element);

  let name = document.createElement('h2');
  name.innerHTML = "Name: " + this.name;
  this.element.appendChild(name);
  this.container.appendChild(this.element);

  let hp = document.createElement('h3');
  hp.innerHTML = "HP: " + this.hp;
  this.element.appendChild(hp);
  this.container.appendChild(this.element);

  let attack = document.createElement('h3');
  attack.innerHTML = "Attack: " + this.attack;
  this.element.appendChild(attack);
  this.container.appendChild(this.element);

  let defense = document.createElement('h3');
  defense.innerHTML = "Defense: " + this.defense;
  this.element.appendChild(defense);
  this.container.appendChild(this.element);

  let ability = document.createElement('h3');
  ability.innerHTML = "Ability: " + this.ability;
  this.element.appendChild(ability);
  this.container.appendChild(this.element);

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

function gallade(){
axios.get("http://fizal.me/pokeapi/api/v2/name/gallade.json")
  .then(function(response) {
    let gallade_img = "Gallade.png";
    let gallade_name = "Gallade";
    let gallade_hp = response.data.stats[5].base_stat;
    let gallade_attack = response.data.stats[4].base_stat;
    let gallade_defense = response.data.stats[3].base_stat;

    let gallade_ability = response.data.abilities[0].ability.name;
    console.log(gallade_ability);
    for (let i = 0; i < response.data.abilities[i].ability.length; i++) {
      let result = response.data.abilities[i].ability.name;
    }


    gallade = new Pokemon(gallade_img, gallade_name, gallade_hp, gallade_attack, gallade_defense, gallade_ability,);
    gallade.display();

  })
}
