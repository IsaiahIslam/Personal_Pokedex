class Pokemon {
  constructor (name, hp, attack, specialAttack, defense, specialDefense, speed, ability) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    this.speed = speed;
    this.ability = ability;
  }

  display(){

    let name = document.getElementById('name' + this.name);
    name.innerHTML = this.name;

    let hp = document.getElementById('HP' + this.name);
    hp.innerHTML = "HP: " + this.hp;

    let attack = document.getElementById('Attack' + this.name);
    attack.innerHTML = "Attack: " + this.attack;

    let specialAttack = document.getElementById('SpecialAttack' + this.name);
    specialAttack.innerHTML = "Special Attack: " + this.specialAttack;

    let defense = document.getElementById('Defense' + this.name);
    defense.innerHTML = "Defense: " + this.defense;

    let specialDefense = document.getElementById('SpecialDefense' + this.name);
    specialDefense.innerHTML = "Special Defense: " + this.specialDefense;

    let speed = document.getElementById('Speed' + this.name);
    speed.innerHTML = "Speed: " + this.speed;

    let ability = document.getElementById('Ability' + this.name);
    ability.innerHTML = "Ability: " + this.ability;
  }
}


let gallade_name;
let gallade_hp;
let gallade_attack;
let gallade_specialAttack;
let gallade_defense;
let gallade_specialDefense;
let gallade_speed;
let gallade_ability;
let gallade;
axios.get("https://fizal.me/pokeapi/api/v2/name/gallade.json")
  .then(pokemon1)
  function pokemon1(response){
    gallade_name = response.data.species.name;
    gallade_hp = response.data.stats[5].base_stat;
    gallade_attack = response.data.stats[4].base_stat;
    gallade_specialAttack = response.data.stats[2].base_stat;
    gallade_defense = response.data.stats[3].base_stat;
    gallade_specialDefense = response.data.stats[1].base_stat;
    gallade_speed = response.data.stats[0].base_stat;
    gallade_ability = response.data.abilities;
    let g_abilities = [];
    for(let i=0;i<gallade_ability.length;i++){
      g_abilities.push(gallade_ability[i].ability.name);
    }
    let gallade_abilities = "";
    for(let i=0;i<gallade_ability.length;i++){
      gallade_abilities +=g_abilities[i] + " ";
    }

    console.log(response.data);
    gallade = new Pokemon(gallade_name, gallade_hp, gallade_attack, gallade_specialAttack, gallade_defense, gallade_specialDefense, gallade_speed, gallade_abilities);
    gallade.display();
    dos.add(gallade);
  }

let lucario_name;
let lucario_hp;
let lucario_attack;
let lucario_specialAttack;
let lucario_defense;
let lucario_specialDefense;
let lucario_speed;
let lucario_ability;
let lucario;
axios.get("https://fizal.me/pokeapi/api/v2/name/lucario.json")
  .then(pokemon2)
  function pokemon2(response){
    lucario_name = response.data.species.name;
    lucario_hp = response.data.stats[5].base_stat;
    lucario_attack = response.data.stats[4].base_stat;
    lucario_specialAttack = response.data.stats[2].base_stat;
    lucario_defense = response.data.stats[3].base_stat;
    lucario_specialDefense = response.data.stats[1].base_stat;
    lucario_speed = response.data.stats[0].base_stat;
    lucario_ability = response.data.abilities;
    let l_abilities = [];
    for(let i=0;i<lucario_ability.length;i++){
      l_abilities.push(lucario_ability[i].ability.name);
    }
    let lucario_abilities = "";
    for(let i=0;i<lucario_ability.length;i++){
      lucario_abilities +=l_abilities[i] + " ";
    }
    console.log(response.data);
    lucario = new Pokemon(lucario_name, lucario_hp, lucario_attack, lucario_specialAttack, lucario_defense, lucario_specialDefense, lucario_speed, lucario_abilities);
    lucario.display();
    dos.add(lucario);
  }

let absol_name;
let absol_hp;
let absol_attack;
let absol_specialAttack;
let absol_defense;
let absol_specialDefense;
let absol_speed;
let absol_ability;
let absol;
axios.get("https://fizal.me/pokeapi/api/v2/name/absol.json")
  .then(pokemon3)
  function pokemon3(response){
    absol_name = response.data.species.name;
    absol_hp = response.data.stats[5].base_stat;
    absol_attack = response.data.stats[4].base_stat;
    absol_specialAttack = response.data.stats[2].base_stat;
    absol_defense = response.data.stats[3].base_stat;
    absol_specialDefense = response.data.stats[1].base_stat;
    absol_speed = response.data.stats[0].base_stat;
    absol_ability = response.data.abilities;
    let a_abilities = [];
    for(let i=0;i<absol_ability.length;i++){
      a_abilities.push(absol_ability[i].ability.name);
    }
    let absol_abilities = "";
    for(let i=0;i<absol_ability.length;i++){
      absol_abilities +=a_abilities[i] + " ";
    }
    console.log(response.data);
    absol = new Pokemon(absol_name, absol_hp, absol_attack, absol_specialAttack, absol_defense, absol_specialDefense, absol_speed, absol_abilities);
    absol.display();
    dos.add(absol)
  }

  class Trainer{
    constructor(pokemon){
      this.pokemon = [];
    }
    all(){
      return this.pokemon
    }
    add(data){
      this.pokemon.push(data)
    }
    get(name){
      for (let i = 0; i < this.pokemon.length; i++) {
        if (name === this.pokemon.length[i].name) {
          counter.push(this.pokemon[i]);
          return counter;
        }
      }
    }
  }
  let dos = new Trainer();

  let button = getElementsByClassName('megaStone');

  let normalDisplay = getElementById('part2');

  let megaDisplay = getElementById('megaPokemon');

  function showMega(){
    normalDisplay.style.display = 'inline-block';
  }

  function hideMega(){
    normalDisplay.style.display = 'none';
  }

  button.addEventListener('click', showMega);

  button.addEventListener('click', hideMega);
