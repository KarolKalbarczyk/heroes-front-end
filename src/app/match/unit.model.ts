
export class Unit {
    health:Number
    maxHealth:Number
    icon: any
    movementRange:Number
    range:Number
    damage: Number
    owner:String


  constructor(unit:any) {
      this.health = unit.health;
      this.maxHealth = unit.maxHealth;
      this.movementRange = unit.movementRange;
      this.range = unit.range;
      this.owner = unit.owner;
      this.damage = unit.damage;
    if(unit.type==="Archer"){
      this.icon = "/assets/img/archer.png"
    }else if(unit.type==="Soldier"){
      this.icon = "/assets/img/soldier.png"
    }
  }
}

export class Archer extends Unit {
  icon  = "assets/img/archer.png"
}

export class Soldier extends Unit{
    icon = "/assets/img/soldier.png"
}
