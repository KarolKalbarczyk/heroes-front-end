
export class Unit {
    health:Number
    maxHealth:Number
    icon:any
    movementRange:Number
    range:Number
    damage: Number
    owner:String

}

export class Archer extends Unit{
    icon = "/assets/archer.png"
}

export class Soldier extends Unit{
    icon = "/assets/soldier.png"
}