// Initalize variables for unordered list, list elements, and user input

const todoList = document.querySelector('#todolist'),
      check = document.querySelector('li'),
      input = document.querySelector('#userinput');

// Clears user input when page is refreshed

document.getElementById('userinput').value = '';

// Creates a new list element and adds that to the todo list

const createToDo = () => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    todoList.appendChild(li);
    input.value = ""; // Resets the user input
    }

// Creates a variable for the length of the user input

const inputLength = (userinput) => input.value.length;

// Runs the function to create a list element after the user presses enter

const enterToDo = () => {
    if (inputLength() > 0 & event.keyCode === 13) {
        createToDo();
        storeToDo(); // Runs the function to store  the new list element in localStorage
    }
}

// If the user presses enter this will run the enterToDo function

input.addEventListener("keypress", enterToDo);

// Stores all todos into localStorage

const storeToDo = () => {
    window.localStorage.todos = todoList.innerHTML;
}


// Retrieves the todos from localStorage

const getToDo = () => {
    const storedToDo = window.localStorage.todos;
    if(!storedToDo) {
      todoList.innerHTML;
    } else {
      todoList.innerHTML = storedToDo;
    }
}
getToDo(); // Runs the function to retrieve todos

// The first click on the todo will add the check class
// The second click on the todo will remove it from the list

todoList.addEventListener("click", (event) => {
    const clk = event.target
    if(clk.classList.contains('check')) {
        clk.parentNode.removeChild(clk);
        storeToDo();
    } else {
        clk.classList.add('check');
        storeToDo();
    }
});
