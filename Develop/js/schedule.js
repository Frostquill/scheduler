var events = {};


var tOfDay= function(){
var currentDay = $("#currentDay");
var day = moment().format('MMMM Do YYYY')
currentDay.text(day);

};
tOfDay();

var hour = 9;
var currentTime = moment().format("k");

var colorCode = function() {

$(".row").each(function( index ) {
    var hours = moment()
    hours = moment().set('hour', hour).format("ha");
    
    $(this).children(".hour").text(hours);
   
    if (hour < currentTime){
        $(this).children(".event").removeClass("col col-xl-10 event present future past").addClass("col col-xl-10 event past");
     } else if (hour > currentTime) {
         
         $(this).children(".event").removeClass("col col-xl-10 event present future past").addClass("col col-xl-10 event future");
     } else {
         
         $(this).children(".event").removeClass("col col-xl-10 event present future past").addClass("col col-xl-10 event present");
     }
     
     hour++
});




};

var saveEvent = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  $(".event").onClick 
  




colorCode();


