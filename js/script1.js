
function login(){ 

var user=document.getElementById('cedula').value; 
var pass=document.getElementById('password').value; 
if (user=="123" && pass=="123") { 
	location.href ="pages/targeton.html";
	}else{
		alert("No se ha encontrado el usuario, por favor intente de nuevo!")
	}
}

function Partido(id, nombrePartido ,presidente, vicepresidente) {
	this.id = id;
	this.nombrePartido = nombrePartido;
	this.presidente = presidente;	
	this.vicepresidente = vicepresidente;
}

function Candidato(id, nombreCandidato, nombreImg) {
	this.id = id;
	this.nombreCandidato = nombreCandidato;
	this.nombreImg = nombreImg;
}

var partidos=[
	new Partido(0, "voto en blanco", null, null),
	new Partido(1, "Conservador", new Candidato(1, "Alejandro Ordóñez", "ordonez.jpg"), new Candidato(2, "Marta Lucía Ramírez", "ramirez.jpg")),
	new Partido(2, "Cambio Radical", new Candidato(3, "Germán Vargas Lleras", "vargas.jpg"), new Candidato(4, "Juan Carlos Pinzón", "pinzon.jpg")),
	new Partido(3, "Movimiento Progresistas", new Candidato(5, "Gustavo Petro", "petro.jpg"), new Candidato(6, "Carlos Caicedo ", "caicedo.jpg")),
	new Partido(4, "FARC", new Candidato(7, "Rodrigo Londoño", "londono.jpg"), new Candidato(8, "Piedad Córdoba", "cordoba.jpg")),
	new Partido(5, "Centro Democratico", new Candidato(9, "Iván Duque", "duque.jpg"), new Candidato(10, "Marta Lucía Ramírez", "ramirez.jpg")),
	new Partido(6, "Partido Liberal Colombiano", new Candidato(11, "Humberto de la Calle", "delacalle.jpg"), 
		new Candidato(12, "Juan Manuel Galán", "galan.jpg")),
	new Partido(7, "Partido Verde", new Candidato(13, "Sergio Fajardo", "fajardo.jpg"), new Candidato(14, "Viviane Morales Hoyos", "Morales.jpg")),
	new Partido(8, "Conservador", new Candidato(15, "Hernán Andrade", "andrade.jpg"), new Candidato(16, "Paola Holguín", "holgin.png"))

];


function verCandidatos(){
//elemrnto refiere a cada uno de los objeto
	partidos.forEach(function (elemento, indice, array){
		console.log(elemento.presidente.nombreImg);
	});
}

function cargarCandidatos(){

	var divListaCandidatos = document.getElementById("divListaCandidatos");

	partidos.forEach(function (elemento, indice, array){

		if (elemento.nombrePartido != "voto en blanco"){

			var divCol = document.createElement("div");
			divCol.setAttribute("class", "col s12 m4 l4");

			var divCard = document.createElement("div");
			divCard.setAttribute("id", "partido"+elemento.id);
			divCard.setAttribute("class", "card hoverable waves-effect blue-grey lighten-5");
			divCard.setAttribute("onclick", "seleccionar("+elemento.id+")");

			var divCardContent = document.createElement("div");
			divCardContent.setAttribute("class", "card-content center-align");
			divCardContent.setAttribute("style", "padding-bottom: 5px;");
			
			var imgPresidente = document.createElement("img");
			imgPresidente.setAttribute("src", "../images/"+elemento.presidente.nombreImg);
			imgPresidente.setAttribute("class", "circle responsive-img foto");

			var imgVicePrecidente = document.createElement("img");
			imgVicePrecidente.setAttribute("src", "../images/"+elemento.vicepresidente.nombreImg);
			imgVicePrecidente.setAttribute("class", "circle responsive-img foto");

			var divCardAction = document.createElement("div");
			divCardAction.setAttribute("class", "card-action center-align");
			divCardAction.innerHTML = '<div>'+elemento.presidente.nombreCandidato+"<br>"+elemento.vicepresidente.nombreCandidato+"</div>";

			// Si el hijo(Child) es una referencia(hace referencia) hacia un nodo existente en el documento actual, este es quitado del padre actual para ser puesto en el nodo padre nuevo. La clave está en si el (Child) es una referencia a un nodo existente en el documento.

			divCardContent.appendChild(imgPresidente);
			divCardContent.appendChild(imgVicePrecidente);
			// divCardContent.appendChild(big);
			divCard.appendChild(divCardContent);
			divCard.appendChild(divCardAction);
			divCol.appendChild(divCard);

			divListaCandidatos.appendChild(divCol);
		}

	});
}


var partidoSeleccionado = '';

function establecerCandidato(id){
	partidos.forEach(function (elemento, indice, array){
		if (id == elemento.id){
			partidoSeleccionado = elemento;
		}
	});
}

function seleccionar(id){

	partidos.forEach(function (elemento, indice, array){
		var card = document.getElementById("partido"+elemento.id);
		if (card.hasAttribute("disabled")){
			card.setAttribute("class", "card hoverable waves-effect blue-grey lighten-5");
			card.removeAttribute("disabled");
		} 
	});
	var cardSeleccionado = document.getElementById("partido"+id);
	cardSeleccionado.setAttribute("class", "card hoverable waves-effect blue lighten-1");
	cardSeleccionado.setAttribute("disabled", "disabled");
	establecerCandidato(id);
	
}

		

		
		
function votar(){
	
		var votar=document.getElementById("votar");

		var btnVotar=document.createElement("a");

		btnVotar.setAttribute("class", "waves-effect waves-light btn-large blue modal-trigger right");
		btnVotar.setAttribute("href","#modal2");
		// btnVotar.setAttribute("onclick",function() { votar() });
		var textoBtn=document.createTextNode('VOTAR');

		btnVotar.appendChild(textoBtn);
		votar.appendChild(btnVotar);

		var divModal=document.createElement("div");
		divModal.setAttribute("id", "modal2");
		divModal.setAttribute("class","modal");


		var divModalContent=document.createElement("div");
		divModalContent.setAttribute("class","modal-content");

		var confirmarModal=document.createElement("h4");
		var textoConfirmar=document.createTextNode("ESTAS SEGURO?");
		confirmarModal.appendChild(textoConfirmar);

		var parrafo=document.createElement("p");
		
		var textoModal=document.createTextNode("Confirme voto por "+partidoSeleccionado.nombrePartido);
		parrafo.appendChild(textoModal);  
		
		var divModalFooter=document.createElement("div");
		divModalFooter.setAttribute("class","modal-footer");

		var btnAceptar=document.createElement("a");
		btnAceptar.setAttribute("class","modal-action modal-close waves-effect waves-blue btn-flat");
		btnAceptar.setAttribute("href","certificadoElectoral.html");
		var textoAceptar=document.createTextNode('ACEPTAR');
		btnAceptar.appendChild(textoAceptar);

		

		var btnCancelar=document.createElement("a");
		btnCancelar.setAttribute("class","modal-action modal-close waves-effect waves-red btn-flat");
		btnCancelar.setAttribute("href","#!");
		var textoCancelar=document.createTextNode('Cancelar');
		btnCancelar.appendChild(textoCancelar);
		
		votar.appendChild(divModal);
		divModal.appendChild(divModalContent);
		divModalContent.appendChild(confirmarModal);
		divModalContent.appendChild(parrafo);
		divModal.appendChild(divModalFooter);
		divModalFooter.appendChild(btnAceptar);
		divModalFooter.appendChild(btnCancelar);

	// if (partidoSeleccionado != ''){
		
	// // document.getElementById("confirmarVoto").innerHTML = "Confirmar voto por : "+partidoSeleccionado.nombrePartido;



	// 	// respuesta = confirm('Confirme voto por '+partidoSeleccionado.nombrePartido);
	// 	// if (respuesta){
			
	// 	// 	location.href ="../pages/certificadoElectoral.html";	
	// 	// }
	// }else{
	// 	alert("Debes seleccionar un candidato");
	// }
}






