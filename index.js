const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

client.on("message", (message) => {
  if (message.content.startsWith("!Item")) { 
    message.reply(GetMessage());
  }});

function GetMessage()
{
    var NewMessage = 'This item should be ' + Class() +' Class, the item Type should be' + Type() + '. The Item Gimmick should be' + Gimmick() + '.'
    return NewMessage;
}
function Class()
{
   var ClassArray = ['Melee', 'Mage', 'Ranger', 'Summoner', 'Thrower'];
   shuffle(ClassArray);
   return ClassArray[0];
}
function Gimmick()
{
   var GimmickArray =  ['Ichor', 'Homing', 'Homing fast shooting', 'Homing slow shooting', 'Cursed flames', 'Bounces off walls', 'Projectiles rain from the sky', 'Spawn projectiles around the enemy and home into the enemy', 'Floating mines', 'Ground placed mines', 'Orbital laser', 'Goes through walls', 'Places blocks', 'Can destroy tiles', 'Projectile stays wherever it lands and lights up around it', 'Make an item sprite/hitbox much larger than normal sprites/hitboxes', 'Make an item sprite/hitbox much smaller than normal sprites/hitboxes', 'Item randomizes size every use', 'Freezes enemies in place on hit', 'Burns enemies on hit', 'Poisons enemies on hit', 'Applies Betsys Curse on enemies on hit', 'Applies Bleeding on enemies on hit', 'Applies Broken Armor on enemies on hit', 'Applies Burning on enemies on hit', 'Applies Chilled on enemies on hit', 'Applies Confused on enemies on hit', 'Applies Cursed on enemies on hit', 'Applies Dazed on enemies on hit', 'Applies Distorted on enemies on hit', 'Applies Electrified on enemies on hit', 'Applies Feral Bite on enemies on hit', 'Applies Frostburn on enemies on hit', 'Applies Horrified on enemies on hit', 'Applies Midas on enemies on hit', 'Applies Oozed on enemies on hit', 'Applies Penetrated on enemies on hit', 'Applies Shadow on enemies on hit', 'Applies Slow on enemies on hit', 'Applies Stoned on enemies on hit', 'Applies Stunned on enemies on hit', 'Applies The Tongue on enemies on hit', 'Applies Venom on enemies on hit', 'Applies Weak on enemies on hit', 'Applies Webbed on enemies on hit', 'Applies Wither Armor on enemies on hit', 'Applies Wither Weapon on enemies on hit', 'Weapon shoots from the sides of your screen', ' Weapon shoots from the sky', 'Weapon shoots stars', 'Shoots gravity based stream', 'Projectile moves fast', 'Projectile moves slow', 'Fast reload time', 'Slow reload time'];
   
   shuffle(GimmickArray);
   return GimmickArray[0];
}
function Type()
{
   var TypeArray =  ['Bows', 'Flamethrower', 'Flails', 'Guns', 'Projectile Swords', 'Non Projectile Swords (Useless)', 'Boomerangs', 'Spears', 'Yoyos', 'Short Sword', 'Javelins', 'Melee Projectile Weapons That Do Not Have Swing Capability', 'Throwing Weapon', 'Grenade/Bomb Types', 'Repeaters', 'Rocket Launcher Type Weapons', 'Wands', 'Magic Guns', 'Tomes', 'Circular Aoe Magic', 'Thrown Projectile Magic', 'Summon Weapon', 'Sentry, Non Permanent Summon (a summon weapon that spawns a homing summon that despawns after it explodes on the enemy)', 'Whips', 'Placeable weapon', 'Holy Water variant', 'Scythes'];
   shuffle(TypeArray);
   return TypeArray[0];
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
 
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  client.login(config.token);
  