class Parent {
    constructor(){
        this.fatherName = 'Trump';
    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const child = new Child('Ivanka');

console.log(child);
console.log(child.getFullName());
