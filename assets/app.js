// Code to display the current date in the header of the page.
    $(function () {
        var currentDay = dayjs(); $('#currentDay').text(currentDay.format('MMM D, YYYY'));
      });
      
$(function saveInput () {
    $('.saveBtn').on('click', function() {
        var hour = $(this).parent().attr('id');  //get "hour-x" id of the time block
        var input = $(this).siblings('.description').val();  //get the inputed text as a value
    
        localStorage.setItem(hour, input);  //save the time and value to local storage hour = key, input =v alue
      });
});

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
