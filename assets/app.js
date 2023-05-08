// Code to display the current date in the header of the page.
$(function () {
    var currentDay = dayjs(); $('#currentDay').text(currentDay.format('MMM D, YYYY, HH:mm A'));
});

// Function to save tasks to local storage
$(function saveInput() {
    $('.saveBtn').on('click', function () {
        var hour = $(this).parent().attr('id');  //get "hour-x" id of the time block
        var input = $(this).siblings('.description').val();  //get the inputed text as a value

        localStorage.setItem(hour, input);  //save the time and value to local storage hour = key, input =value
    });
});

// Function for current time
function timeUpdate() {
    var currentTime = dayjs().hour();
   
// calling attribute of each time-block
    $('.time-block').each(function () {
        var time = parseInt($(this).attr('id').split('-')[1]);

 // loop to apply the past, present, or future class to each time block
        if (time < currentTime) {
            $(this).addClass('past');
        } else if (time === currentTime) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });

}

timeUpdate();
// Update time every 10 miniutes
setInterval(timeUpdate, 1000)

// Display all that has been saved in local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
