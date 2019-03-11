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

let nepal = {
    mountains: ["Everest", "Fish Tail", "Annapurna"],
    // add method
    printWithDash: function() {
        setTimeout(() => console.log(this.mountains.join(" - ")),
         3000);
    }
};

nepal.printWithDash();