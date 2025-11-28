const person = {
    name: "gio",
    age: 14,
    მისალმება: function () {
        console.log ("ჩემი სახელია", this.name + "და ვარ ", this.age + "წლის!")
    }
};

person.მისალმება ()