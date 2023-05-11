// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
currentDay = dayjs();
$('#currentDay').text(currentDay)



$(function () {

$(".saveBtn").on('click', function () {
    // the description is grabbing the description written by the user
    // the timeblock is grabbing which timeblock the user is writing on or which one is saved

    let description = $(this).siblings(".description").val();
    let timeBlock = $(this).parent(".time-block").attr("id")
    console.log(description)
    console.log(timeBlock)
})
// Function to set color depending on time of the day
function timeColor(){
// this time variable is for the hour of the day to check if it is past present or future
let time = dayjs().hour();

$(".time-block").each(function (){
    var timeBlockhr = parseInt($(this).attr("id").split("-")[1]);

if (timeBlockhr === time){
    $(this).removeClass("future")
    $(this).removeClass("past")
    $(this).addClass("present")
}

else if (timeBlockhr < time){
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
}

else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
}
})

}
timeColor()
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?


    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  