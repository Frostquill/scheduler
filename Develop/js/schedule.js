


var tOfDay= function(){
var currentDay = $("#currentDay");
var day = moment().format('MMMM Do YYYY')
currentDay.text(day);

};
tOfDay();



var colorCode = function() {

    var hour = 9;

$(".row").each(function() {
    // var hours = moment()
    var hours = moment().set('hour', hour).format("ha");
    var currentTime = moment().format("k");
   
    
    $(this).children(".hour").text(hours);
   
    if (hour < currentTime){
        $(this).children(".event")
        .removeClass("col col-xl-10 event present future past")
        .addClass("col col-xl-10 event past");
     } else if (hour > currentTime) {
         
         $(this).children(".event")
         .removeClass("col col-xl-10 event present future past")
         .addClass("col col-xl-10 event future");
     } else {
         
         $(this).children(".event")
         .removeClass("col col-xl-10 event present future past")
         .addClass("col col-xl-10 event present");
     }
     
     hour++
});




};
colorCode();
var events = {
    
};

var loadEvent = function() {
    events = JSON.parse(localStorage.getItem("events"));
    if( !events
    ) {
        events = {
            nine: "", 
            ten: "",
            eleven: "",
            twelve: "",
            thirteen: "",
            fourteen: "", 
            fifteen: "",
            sixteen: "", 
            seventeen: "", 
            
        };
    }
    $.each(events , function(key , value) {
        $(`#${key}  .event`).append(value);
       
    })
}
var saveEvent = function() {
    localStorage.setItem("events", JSON.stringify(events));
  };

  

 
  
 
  


  $(".row").on("click", ".event",  function () {  
   var currentId = $(this)
   .closest(".row")
   .attr("id")
   console.log(currentId);

    var currentText= $(this)
      .text()
      .trim();
      
    var editEvent = $("<textarea>").addClass("col col-xl-10 event form-control").val(currentText);
      
     $(this).replaceWith(editEvent);
     
     editEvent.trigger("focus");
    
   
     console.log(events);
 
  });


$(".row").on("click", ".fa-save", function() {
    colorCode();
    var currentId = $(this)
   .closest(".row")
   .attr("id")
   var currentText = $(`#${currentId} .event`).val()
   events[currentId] = currentText;  
   
   saveEvent();
//    console.log(currentText);
   
   
   


});
  

  
  
  





// debugger;
loadEvent();


