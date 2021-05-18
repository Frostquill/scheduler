var events = {};
var currentDay = $("#currentDay");

var tOfDay= function(){
var day = moment().format('MMMM Do YYYY')
currentDay.text(day);
};

tOfDay();