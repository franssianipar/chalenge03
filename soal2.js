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
        constructor(name, age, status){
            super(name, age, 0, "shark", status)
        }
        print() {
            return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}\n`
        }
    }

    class Cat extends Animal{
        constructor(name, age, status){
            super(name, age, 4, "cat", status)
        }
        print() {
            return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}\n`
        }

    }

    class Dog extends Animal{
        greetMaster(){
            return `Hello ${this.master}`;
        }
        constructor(name, age, status, master){
            super(name, age, 4, "dog", status)
            this.master = master
        }
        print() {
            return `nama ${this.name}, umur ${this.age}, kaki ${this.legs}, spesies ${this.species}, status ${this.status}\n`
        }
    }
    const hiu = new Shark('Hiu', 10, 'Berenang')
    const cat = new Cat('cat', 5, 'Berjalan')
    const dog = new Dog('Dog', 8, 'Berlari', 'Master')

    console.log(hiu.print())