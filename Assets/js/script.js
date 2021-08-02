// Format For Date In Header/Moment js

var time = moment();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//using local storage to pull and retrieve data when refreshed

$(".saveBtn").click(function () {
  console.log($(this));
  console.log($(".saveBtn"));
  var time = $(this).parent().attr("id");

  var textarea = $(this).siblings(".textarea").val();

  localStorage.setItem(time, textarea);

})
$(".time-block").each(function () {
  console.log($(".time-block"));
  var time = $(this).attr("id");

  var save = localStorage.getItem(time);

  if (save !== null) {

    $(this).children(".textarea").val(save);
  }
});

// Past and Present to change text area
function urgencyNotifier() {
  hour = time.hours();
  $(".time-block").each(function() {
      var Time = parseInt($(this).attr("id"));
      
      if (Time > hour) {
        $(this).removeClass(["past", "present"]).addClass("future");
      } 
      else if (Time === hour) {
        $(this).removeClass(["past", "future"]).addClass("present");
      } 
      else {
        $(this).removeClass(["present", "future"]).addClass("past");
      }
  });
}
//linked with moment to change color based on time
var time = moment();
urgencyNotifier()



