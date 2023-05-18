const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    // grab the root element
    const root = document.getElementById("root");

    // create the h1 element
    const h1 = document.createElement("h1");
    h1.textContent = "FREELANCERS";

    // create the unordered list element
    const ul = document.createElement("ul");

    // loop through the users array
    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        // create li element for each user
        const li = document.createElement("li");
        li.textContent = `${user.name}, ${user.age}, ${user.occupation}`;

        // append li element to the ul element
        ul.appendChild(li);
    }

    // append the h1 and ul elements to the root element
    root.appendChild(h1);
    root.appendChild(ul);
}

// call the main function
main();
