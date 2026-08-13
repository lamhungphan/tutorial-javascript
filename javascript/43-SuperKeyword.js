
        // super = keyword is used in classes to call the constructor or 
        //         access the properties and methods of a parent (superclass)
        //         this = this object
        //         super = the parent

        class Animal {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            move(speed) {
                console.log(`The ${this.name} moves at a speed of ${speed}km`);
            }
        }

        class Rabbit extends Animal {
            constructor(name, age, runSpeed) {
                super(name, age);
                this.runSpeed = runSpeed;
            }
            run() {
                console.log(`This ${this.name} can run`);
                super.move(this.runSpeed);
            }
        }

        class Fish extends Animal {
            constructor(name, age, swimSpeed) {
                super(name, age);
                this.swimSpeed = swimSpeed;
            }
            swim() {
                console.log(`This ${this.name} can swim`);
                super.move(this.swimSpeed);
            }
        }

        class Hawk extends Animal {
            constructor(name, age, flySpeed) {
                super(name, age);
                this.flySpeed = flySpeed;
            }
            fly() {
                console.log(`This ${this.name} can fly`);
                super.move(this.flySpeed);
            }
        }

        const rabbit = new Rabbit("BugBunny", 1, 25);
        const fish = new Fish("Nemo", 2, 12);
        const hawk = new Hawk("Daffy", 3, 50);

        console.log(fish.name);
        console.log(fish.age);
        console.log(fish.swimSpeed);

        rabbit.run();
        fish.swim();
        hawk.fly();


    
