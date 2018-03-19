

// No necesitas usar un servidor, para acceder al json solo usa la variable data que declare en el archivo data.js

function login(){
	idVotante = document.getElementById("cedula").value;
	password = document.getElementById("password").value;

	var index = data.dataVotacion.findIndex(obj=>obj.id==idVotante); // Busco el index del id que se dio en el vector

	if (index != -1){ // si no encuentra el index entonces arroja -1
		if (data.dataVotacion[index].password == password){
			location.href ="pages/administrador.html";
		}else{
			document.getElementById("mensaje").innerHTML = "La conntraseña es incorrecta, por favor intente de nuevo!";
		}
	}else{
		document.getElementById("mensaje").innerHTML = "No se ha encontrado ningún ususario, por favor intente de nuevo!";
	}
}

Reloj();
function Reloj() {
	var tiempo = new Date();
	var hora = tiempo.getHours();
	var minuto = tiempo.getMinutes();
	var segundo = tiempo.getSeconds();
	document.getElementById('hora').innerHTML = hora;
document.getElementById('minuto').innerHTML = minuto;
document.getElementById('segundo').innerHTML = segundo;
setTimeout('Reloj()', 1000);
str_hora = new String(hora);
if (str_hora.length == 1) {
document.getElementById('hora').innerHTML = '0' + hora;
}
str_minuto = new String(minuto);
if (str_minuto.length == 1) {
document.getElementById('minuto').innerHTML = '0' + minuto;
}
str_segundo = new String(segundo);
if (str_segundo.length == 1) {
document.getElementById('segundo').innerHTML = '0' + segundo;
}
}

		
	
// var dataSet = [
//     [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
//     [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
//     [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
//     [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
//     [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
//     [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
//     [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
//     [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
//     [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
//     [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
//     [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
//     [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
//     [ "Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600" ],
//     [ "Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500" ],
  
// ];
 
// $(document).ready(function() {
//     $('#example').DataTable( {
//         data: dataSet,
//         columns: [
//             { title: "Name" },
//             { title: "Position" },
//             { title: "Office" },
//             { title: "Extn." },
//             { title: "Start date" },
//             { title: "Salary" }
//         ]
//     } );
// } );




