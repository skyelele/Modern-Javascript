function welcome(user="Mystery Person", message="Eyyyy"){
    alert(`Hello ${user}, ${message}`);
}

welcome("Skye", "I love you.");
welcome();

function greeting(message) {
    return alert(`${message} everyone!`);
}

greeting('Good morning');

let greeting2 = message => alert(`${message} everyoneee!!!`);

greeting2("GAHH");

let createBlog = (title, body) => {
    if(!title) {
        throw new Error('A title is required');
    }

    if(!body) {
        throw new Error('Body can\'t be empty!');
    }

    return alert(`${title} - ${body}`);
}

createBlog('ho', "ha");

function sayHi() {

}

// console logs the window object -->
console.log(this);

let nepalz = {
    mountains: ["Everest", "Fish Tail", "Annapurna"],
    // add method
    printWithDash: function() {
        setTimeout(() => console.log(this.mountains.join(" - ")),
         3000);
    }
};

nepalz.printWithDash();

let thingsToDo = {
    morning: "Exercise",
    afternoon: "Work",
    evening: "Code",
    night: ["Sleep", "Dream"]
}

let { morning, afternoon } = thingsToDo;
morning = "Run"

console.log(morning, " - ", afternoon);

/////////

let uniStudent = student => {
    let {name, university} = student;
    console.log(`${name} from ${university}`);
}

uniStudent({
    name: "Ryan",
    university: "University of Sydney"
});

///////////

let uniStudent2 = ({ name, university }) => {
    console.log(`${name} from ${university}`);
}

uniStudent2({
    name: "Ryan",
    university: "ICU"
});

////////////// Destructuring arrays

let [firstMountain] = ["Everest", "Fish Tail", "Annapurna"];
console.log(firstMountain);

let [, firstMountainz] = ["Everest", "Fish Tail", "Annapurna"];
console.log(firstMountainz);

let [, , firstMountainzz] = ["Everest", "Fish Tail", "Annapurna"];
console.log(firstMountainzz);

//////// Restructuring

var name = "Everest";
var height = 8848;
var output = function () {
    console.log(`Mt. ${this.name} is ${this.height} meter(s) tall.`);
}

var adventureClimbing = { name, height, output };

adventureClimbing.output();

///////// Restructuring #2
///// I.e. the old way

var adventureClimbing = {
    name: "Everest",
    height: 8848,
    output() {
        console.log(`Mt. ${this.name} is ${this.height} meter(s) tall.`);
    }
};

adventureClimbing.output();


/// Spread and rest operators

var mountains = ["Everest", "Fish Tail", "Annapurna"];
var mountainsFromJapan = ["Fuji"];

var allMountains = [...mountains, ...mountainsFromJapan];

console.log(allMountains);

var day = {
    breakfast: "toast with oat milk",
    lunch: "rice with curry"
}

var night = {
    dinner: "noodle soup"
}

var picnic = {...day, ...night};

console.log(picnic);

// rest

var rivers = ['Sunkoshi', 'Tamakoshhi', 'Saptaakoshi'];
var [first, ...rest] = rivers;

console.log(first);
// logs "Sunkoshi"
console.log(rest);
// logs ["Tamakoshhi", "Saptaakoshi"]

// CLASSES
// IN ES6

function Holiday(destination, days) {
    this.destination = destination;
    this.days = days;
}

Holiday.prototype.info = function() {
    console.log(this.destination + " | " + this.days + " days");
}

var nepal = new Holiday("Nepal", 30);

console.log(nepal.info());

class Holidayz {
    constructor(destinationz, dayz) {
        this.destinationz = destinationz,
        this.dayz = dayz
    }
    infoz() {
        console.log(`${this.destinationz} will take ${this.dayz} days.`);
    }
}

const trip = new Holidayz("Japan", 529);
console.log(trip.infoz());

////////

// super class
class Holidayztwo {
    constructor(destinationz, dayz) {
        this.destinationz = destinationz,
        this.dayz = dayz
    }
    infoz() {
        console.log(`${this.destinationz} will take ${this.dayz} days.`);
    }
}

// sub class
class Expedition extends Holidayztwo {
    // this sub class (Expedition) extends from Holiday,
    // so it inherits destinationz and days
    // I.e. we don't need to redefine them here
    constructor(destinationz, dayz, gear) {
        // inherit properties from super class
        super(destinationz, dayz);
        this.gear = gear;
    }

    infoz() {
        // inherit method from super class
        super.infoz();
        console.log(`Bring your ${this.gear.join(" and your ")}.`);
    }
}

const tripWithGear = new Expedition("Everest", 50, ["Sunglasses", "Flags", "Camera"]);
tripWithGear.infoz();