
var buttonPressed;

$(function()
{
    /* all your jquery code goes here */
    
    /* e.g., take element with class .something and change some of its style attributes */
	$ignpile_input = $("#ignpile"); 
	$ignpile_input.hide();
	$fcpile_input = $("#fcpile"); 
	$fcpile_input.hide();
	$notes = $("#notes"); 
	$notes.hide();
	$slidebutton = $("#slidebutton");
    $buttonplus = $("#buttonplus");
    $buttonplus2 = $("#buttonplus2");
	$slidebutton.click(function() { $ignpile_input.slideToggle();  $buttonplus.toggleClass("icon-plus3");}); 
	$slidebutton2 = $("#slidebutton2");
	$slidebutton2.click(function() { $fcpile_input.slideToggle();  $buttonplus2.toggleClass("icon-plus3");}); 
	$notesbutton = $("#notesbutton");
	$notesbutton.click(function() { $notes.slideToggle("slow");});
    
    $bulbabutton = $("#bulbasaurball");
	$bulbabutton.click(function () { 
        buttonPressed = "Bulbasaur"
        $("#starterpreview").css({"background-image": "url('bulbasaur.png')"}
                                )});
    
    $squirtlebutton = $("#squirtleball");
	$squirtlebutton.click(function () { 
        buttonPressed = "Squirtle"
        $("#starterpreview").css({"background-image": "url('squirtle.png')"}
                                )});
    
    $charmbutton = $("#charmanderball");
	$charmbutton.click(function () { 
        buttonPressed = "Charmander"
        $("#starterpreview").css({"background-image": "url('charmander.png')"}
                                )});
    

});


function flairsend(){
	user = document.getElementById("user").value;
	fc 	 = document.getElementById("fc").value;
	fc2 = document.getElementById('fc2').value;
	user2 = document.getElementById("user2").value;
	user3 = document.getElementById("user3").value;
	user4 = document.getElementById("user4").value;
	ign2 = "";
	ign3 = "";
	ign4 = "";
	friendcode2 = "";
	type = document.getElementById("gametype").value;
	type2 = document.getElementById("gametype2").value;
	type3 = document.getElementById("gametype3").value;
	type4 = document.getElementById("gametype4").value;
    team = document.getElementById("teamselect").value;
	
     if(! buttonPressed){
         window.alert("Click a Pokeball to choose your Starter");
	    return;
     }
    
    if (team == "-") {
        window.alert("Choose a Side!" + team);
	    return;
     }
    
	if (fc.length != 14)
		{
		window.alert("You totes messed up the Friend Code");
	    return;
		}
		
	if (user.length > 12)
		{
		window.alert("Your IGN is too long");
	    return;
		}
		
	if (user2.length > 12)
		{
		window.alert("Your second IGN is too long");
	    return;
		}
	
	if (user3.length > 12)
		{
		window.alert("Your third IGN is too long");
	    return;
		}
	
	if (user4.length > 12)
		{
		window.alert("Your fourth IGN is too long");
	    return;
		}
	
	if (user == "")
		{
			window.alert("Your IGN is not nothing");
			return;
		}

	if (fc2 != ""){
		friendcode2 = ", " + fc2;
	}

	if (user2 != "") {
		ign2 = ", " + user2;
		if (type2 != "-") {
			ign2 = ign2 + " (" + type2 + ")"
		}
	}
	
	if (user3 != "") {
		ign3 = ", " + user3;
		if (type3 != "-") {
			ign3 = ign3 + " (" + type3 + ")"
		}
	}
	
	if (user4 != "") {
		ign4 = ", " + user4;
		if (type4 != "-") {
			ign4 = ign4 + " (" + type4 + ")"
		}
	}
	
	
	if (type != "-"){
		user = user + " (" + type + ")";
	}
		
	msg = fc + friendcode2 + " || " + user + ign2 + ign3 + ign4;
    
    title = "Team " + team + " " + buttonPressed;
	
	if (msg.length > 64)
		{
		window.alert("Your flair is too long");
	    return;
		}

	console.log(msg);
    console.log(buttonPressed);
	
	document.getElementById("message").innerHTML=msg;
	
	window.open("http://www.reddit.com/message/compose/?to=Porygon2-Bot&subject="+title+"&message="+msg);
}
