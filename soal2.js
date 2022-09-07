    class Animal{
        constructor(name,age,legs,species,status){
            this.name =name;
            this.age = age;
            this.legs = legs;
            this.species = species;
            this.status = status;
        }   
        introduce(){
            return `hello,my name is ${this.name} and i am ${this.age} years old.`;
        }
        
        
    }


    class Shark extends Animal{
        constructor(name, age, legs, species, status){
            super(name, age, legs, species, status)
        }
        print() {
            return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}\n`
        }
    }

    class Cat extends Animal{
        constructor(name, age, legs, species, status){
            super(name, age, legs, species, status)
        }
        print() {
            return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}\n`
        }

    }

    class Dog extends Animal{
        greatMaster(){
            return `hello,my name is ${this.name} `;
        }
        constructor(name, age, legs, species, status){
            super(name, age, legs, species, status)
        }
        print() {
            return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}\n`
        }

    }
    const hiu = new Shark('Hiu', 10, 0, 'Shark', 'Berenang')
    const cat = new Cat('cat', 5, 4, 'Cat', 'darat')
    const dog = new Dog('Master', 8, 4, 'Dog', 'langka')
    console.log(hiu.introduce())
    console.log(hiu.print())
    console.log(cat.introduce())
    console.log(cat.print())
    console.log(dog.greatMaster())
    console.log(dog.print())
    