// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // define all the DOM html elements that will be used
  const timeDisp = $("#currentDay");
  const timeBlocks = $(".time-block");

  timeBlocks.each(function (index, element) {
    // add event listener to the save button
    $(this).on("click", "button", function () {
      const hour = $(this).parent().attr("id");
      const textDisp = $(this).parent().children(".description").val();
      localStorage.setItem(hour, textDisp);
    });

    // check if the time is past, present or future
    // console.log(index, element.getAttribute("id"), $(this).attr("id")); Cannot use JQuery method on an object that is obtained from vanilla JavaScript
    const hour = parseInt($(this).attr("id").split("-")[1]);
    if (Number(dayjs().format("HH")) > hour) {
      $(this).addClass("past");
    } else if (Number(dayjs().format("HH")) === hour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    // retrive and display the data saved in local storage
    $(this)
      .children(".description")
      .val(localStorage.getItem($(this).attr("id")));
  });

  $(function () {
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
    // display the current date
    timeDisp.text(dayjs().format("dddd, MMM, DD, YYYY"));
  });
});
