var luces = ['semrojo.gif', 'semamarillo.gif','semaverde.gif'];

function cambiarluces(){
	var index = Math.floor((Math.random()*luces.length));
	document.getElementById("myimage").src=luces[index];
}

function prenderluces(){
	
	setInterval(cambiarluces, 2000);

function mensaje(){
	alert("Esta saliendo de StraKnow");
}
