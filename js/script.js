$("#search").keyup(function(){
	var searchfield = $("#search").val();
	var myExp = new RegExp (searchfield, "i");
	//console.log (searchfield + " myExp: " + myExp);
	$.getJSON("data1.json",function (data){
		var output = "";
		$.each(data, function (key,val){
		if (val.name.search(myExp) != -1 ){
		 output += "<div class=\"row-fluid searchresults\"><div class=\"span8\"><div class=\"row-fluid well\"><div class=\"span12 alert alert-success\"><h3 class=\"pagination-centered\">"+val.name+"</h3></div><div class=\"span12\"><img src=\"images/"+val.image+".jpg\" width=\"150px\" class=\"pull-left fabian\" ><h4>"+val.country+"</h4><p>"+val.description+"</p></div></div><hr></div></div>" ;
		 }
		});	
		$("#results").html(output);
	});
});








/*
$(document).ready(function(e) {
    $(document).get("#test").innerHTML="This is jquery";
});
document.getElementById("test").innerHTML="something";
//this bottom part is working fin!
*/
/*
$.getJSON("data1.json",function(data){
	console.log(data);
var output = "<ul>";
$.each(data, function (key,val){
	output += "<li>"+val.name+"</li>";
	});
output += "</ul>";
$("#test").html(output);
	});
	
*/