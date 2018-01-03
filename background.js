//This code run inside web.whatsapp page

$("document").ready(function(){
	
	//if(!isInCacheData())	
		//createQuestionDiv();
	//setInterval(function(){ createFacesDiv();  }, 10000)
	createFacesDiv();
		
	$("#button_ok").click(function(){
		savePersonalData($("#sexo").val(),$("#edad").val());
		$("#popup-personal").remove();
	});
	
	$("#angry").click(function(){
			guardarSentimiento("enojado");
	}).hover(function(){
			$(this).css('cursor','pointer');
			});
	
	
	$("#happy").click(function(){
			guardarSentimiento("feliz");
	}).hover(function(){
			$(this).css('cursor','pointer');
			});
	
	
	$("#cry").click(function(){
			guardarSentimiento("triste");
	}).hover(function(){
			$(this).css('cursor','pointer');
			});
			
	$("#tired").click(function(){
			guardarSentimiento("tired");
	}).hover(function(){
			$(this).css('cursor','pointer');
			});
	
	$(".sfibbbc").keypress(function(){
		guardarCadencia();
	});

})

function savePersonalData(sexo,edad){
		
	localStorage.setItem("Sexo",sexo);
	localStorage.setItem("Edad",edad);
	
}

function isInCacheData(){
	
	var exists = true;
	var sexo = localStorage.getItem("Sexo");
	var edad = localStorage.getItem("Edad");
	
	if(sexo == null || edad == null)
			exists = false;
	return exists;
}

function createQuestionDiv(){
		
	/*Styles*/
	/*DIV*/
	var div = document.createElement("div");
	div.id = "popup-personal";
	div.style.top = "0px";
	div.style.left = "0px";
	div.style.position = "fixed";
	div.style.backgroundColor= "#dd4b39";
	div.style.height = "auto";
	div.style.borderRadius = "5px";
		
	/*Inside the div*/
	/*DIV row*/
	var row = document.createElement("div");
	row.className = "row";
	row.style.textAlign = "center";
	row.style.color = "white";
	
	var col1 = document.createElement("div");
	col1.className = "col-md-6";
	col1.innerHTML = "<h3>SEXO</h3><select class='form-control' id='sexo'><option>F</option><option>M</option></select>";
	
	var col2 = document.createElement("div");
	col2.className ="col-md-6";
	col2.innerHTML = "<h3>EDAD</h3><select class='form-control' id='edad'><option> 20 o menos </option><option>20-25</option><option>25-35</option><option>35-45</option><option>45 o más</option></select>";
	
	row.appendChild(col1);
	row.appendChild(col2);	
	div.appendChild(row);
	
	/*Inside the div*/
	/*DIV row*/
	var row2 = document.createElement("div");
	row2.className = "row";
	row2.style.textAlign = "center";
	row2.style.color = "white";
	
	var coldown = document.createElement("div");
	coldown.className = "col-md-12";
	coldown.innerHTML = "<button id='button_ok' class='btn-default' style='width:30%;margin-top:10px;margin-bottom:10px;color:black;'>Enviar</button>";	
	
	row2.appendChild(coldown);
	
	div.appendChild(row2);
	
	document.body.appendChild(div);
	
}


function createFacesDiv(){
	
	var div = document.createElement("div");
	div.id = "popup-faces";
	div.style.top = "0px";
	div.style.left = "0px";
	div.style.position = "fixed";
	div.style.backgroundColor= "#dd4b39";
	div.style.height = "auto";
	div.style.borderRadius = "20px";
	
	var img1 = chrome.extension.getURL("img/emo1.png");
	var img2 = chrome.extension.getURL("img/emo2.png");
	var img3 = chrome.extension.getURL("img/emo4.png");
	var img4 = chrome.extension.getURL("img/emo3.png");
	
	var rowMessage = document.createElement("div");
	rowMessage.className = "row";
	rowMessage.style.textAlign = "center";
	rowMessage.style.color = "white";
	
	var message = document.createElement("p");
	message.innerHTML = "¿Cómo te sentis ahora?"
	
	rowMessage.appendChild(message);
	
	var row = document.createElement("div");
	row.className = "row";
	row.style.textAlign = "center";
	row.style.color = "white";
	
	var col1 = document.createElement("div");
	col1.className = "col-md-3";
	col1.innerHTML = "<img id='cry' src="+img1+" style='width: 80px; height:80px' title='Triste'>";
	
	var col2 = document.createElement("div");
	col2.className ="col-md-3";
	col2.innerHTML = "<img id='happy' src="+img2+" style='width: 80px; height:80px' title='Feliz'>";
	
	var col3 = document.createElement("div");
	col3.className ="col-md-3";
	col3.innerHTML = "<img id='angry' src="+img3+" style='width: 80px; height:80px' title='Enojado'>";
	
	var col4 = document.createElement("div");
	col4.className ="col-md-3";
	col4.innerHTML = "<img id='tired' src="+img4+" style='width: 80px; height:80px' title='Cansado'>";
	
	row.appendChild(col1);
	row.appendChild(col2);
	row.appendChild(col3);
	row.appendChild(col4);
	
	div.appendChild(rowMessage);
	div.appendChild(row);
		
	document.body.appendChild(div);	
	
}

function guardarSentimiento(carita){
	
	var tiempo = new Date().getTime();
	
	var array_sent = localStorage.getItem('arraySentimientos');
	if (array_sent == null){
		
		var array = new Array();
		var object = {"Estado":carita,"Tmp":tiempo};
		object = JSON.stringify(object)
		array.push(object);
		localStorage.setItem('arraySentimientos', JSON.stringify(array));
	} else {
		
		array_sent = JSON.parse(array_sent);
		
		var object = {"Estado":carita,"Tmp":tiempo};
		object = JSON.stringify(object);
		array_sent.push(object);
		localStorage.setItem('arraySentimientos', JSON.stringify(array_sent))
		
	}
	
}

function guardarCadencia(){
	
	var tiempo = new Date().getTime();
	var array_caden = localStorage.getItem('arrayCadencia');
	
	if (array_caden == null) {
		
		var array = new Array();
		array.push(tiempo);
		localStorage.setItem('arrayCadencia', JSON.stringify(array));
		
	} else {
		
		array_caden = JSON.parse(array_caden);
		array_caden.push(tiempo);
		localStorage.setItem('arrayCadencia', JSON.stringify(array_caden));
		
	}
	
}