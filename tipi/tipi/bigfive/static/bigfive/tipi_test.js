$(document).ready(function(){
    $("#myForm").submit(function(e){
        e.preventDefault();
        var name = $("#name").val();
        if(!name.length) {
			$("#myspan").text("Please enter the Name");
        	$("#name").focus();
			return false;
		}
    	if(!$('input:radio[name=one]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:1");
			return false;
		}
		if(!$('input:radio[name=two]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:2");
			return false;
		}
		if(!$('input:radio[name=three]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:3");
			return false;
		}
		if(!$('input:radio[name=four]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:4");
			return false;
		}
		if(!$('input:radio[name=five]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:5");
			return false;
		}
		if(!$('input:radio[name=six]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:6");
			return false;
		}
		if(!$('input:radio[name=seven]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:7");
			return false;
		}
		if(!$('input:radio[name=eight]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:8");
			return false;
		}
		if(!$('input:radio[name=nine]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:9");
			return false;
		}
		if(!$('input:radio[name=ten]').is(':checked')) {
		    $("#myspan").text("Please Answer Question:10");
			return false;
		}
		saveAnswers()
        });
});
function getSelection() {
	var mySelection = $('input:radio:checked').map(function() {
        return this.value;
	}).get();
	return mySelection;
}

function saveAnswers(){
    var name = $("#name").val();
    answers= getSelection()
    var a1 = answers[0]
    var a2 = answers[1]
    var a3 = answers[2]
    var a4 = answers[3]
    var a5 = answers[4]
    var a6 = answers[5]
    var a7 = answers[6]
    var a8 = answers[7]
    var a9 = answers[8]
    var a10 = answers[9]
    var mydata_obj = {"name":name, "q1":a1, "q2":a2,"q3":a3, "q4":a4,"q5":a5,
    "q6":a6, "q7":a7,"q8":a8, "q9":a9,"q10":a10};
	var myjson_obj = JSON.stringify(mydata_obj);

	    	//POST - send JSON data to Python/Django server
	$.post({
	  url: "/test",
	  type: "POST",
	  datatype: 'json',
	  data: myjson_obj,
	  async: true,
      processData: true,

	  success: function() {
	    alert('Your data is saved , Thank you!');
	    clearForm();
	  },
	  error: function() {
	    alert('Error occured while saving your Data');
	  }
	});
}

function clearForm()
{
    $("#name").val("");
    $('input:radio').prop('checked',false);
}

