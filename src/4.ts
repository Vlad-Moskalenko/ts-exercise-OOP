
class Key {
  private signature:number

  constructor() {
    this.signature = Math.random()
  }

  getSignature(): number {
    return this.signature
  }
}

class Person {
  constructor(private key: Key) {
  }

  getKey():number {
    return this.key.getSignature()
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key){
    this.key = key
  }

  comeIn(person: Person):void {
     if (this.door) {
      this.tenants.push(person);
      console.log('Person came into the house.');
    } else {
      console.log('The door is closed. Cannot come in.');
    }
  }

  abstract openDoor(key: number):void
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key:number): void {
    if(key === this.key.getSignature()){
      this.door = true;
      console.log('The door is opened.');
    } else {
      console.log('The key does not match. Cannot open the door.');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};