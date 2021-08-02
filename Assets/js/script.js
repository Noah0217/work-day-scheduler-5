// Format For Date In Header
var time = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Using local storage to save and retrieve data on refresh
$(".time").click(function() {
var time = $(this).attr("id");

var schedule = localStorage.getItem(time);

if (schedule !==null) {
  
  $(this).children(".schedule").val(schedule);
}

});


//This saves the text when refreshed
 openPlanner();
 $(".save").on("click", function () {
   var time = $(this).parent().attr("id");

   var schedule = $(this).siblings(".schedule").val();

   localStorage.setItem(time, schedule);

 })



 




