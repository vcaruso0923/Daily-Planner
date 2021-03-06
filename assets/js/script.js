// Display Date at Top
var dateToday = moment().format('MMMM Do YYYY');
$("#currentDay").append(dateToday);

//Get array of tasks or set array to empty if there are none in storage. 
var taskList = JSON.parse(localStorage.getItem('todolist')) || [];

$('.saveBtn').on('click', function (event) {
    event.preventDefault();

    //clear existing vallues
    localStorage.clear();

    //get all textarea elements
    var timeBlockElements = $(".textarea");

    // loop through textarea elements
    for (var i = 0; i < timeBlockElements.length; i++) {

        //recreate array after clearing storage
        var taskList = JSON.parse(localStorage.getItem('todolist')) || [];

        if (typeof timeBlockElements[i] !== "undefined") {
            // Get current iteration's ID and Get the to-do "value" from the textbox and store it as a variable using `.val()` and `.trim()`
            var taskArray = {
                toDoTaskID: timeBlockElements[i].id,
                toDoTask: $(timeBlockElements[i]).val()
            }

            // Add the new to-do and it's ID to our local 'taskList' variable
            taskList.push(taskArray);

            // Save the to-dos into localStorage
            localStorage.setItem('todolist', JSON.stringify(taskList));
        }
    }
});

//load tasks on refresh (Looping didn't work! local storage would not accept [i])
var loadTasks = function () {

    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[0];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask
    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[1];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask
    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[2];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask
    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[3];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask
    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[4];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask
    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[5];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask
    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[6];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask
    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[7];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask
    var loadedTasks = JSON.parse(localStorage.getItem('todolist'))[8];
    document.getElementById(loadedTasks.toDoTaskID).textContent = loadedTasks.toDoTask

}
    

//Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "textarea"
    var timeBlockElements = $(".textarea");

    //loop through taskarea classes
    for (var i = 0; i < timeBlockElements.length; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

//load saved tasks
loadTasks();