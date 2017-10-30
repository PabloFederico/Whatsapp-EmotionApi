//This code run inside web.whatsapp page

$("document").ready(function(){
	
	//if(!isInCacheData())	
		createQuestionDiv();
	//setInterval(function(){ createFacesDiv();  }, 10000)
	//createFacesDiv();

	$("#button_ok").click(function(){
		savePersonalData($("#sexo").val(),$("#edad").val());
		$("#popup-personal").remove();
	});
	
	$("#angry").click(function(){
			alert("Seip");
	});
	
	$("#angry").hover(function(){
			$(this).css('cursor','pointer');
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
	div.style.width = "20%";
	div.style.height = "auto";
	div.style.borderRadius = "20px";
	
	var img1 = chrome.extension.getURL("img/emo1.png");
	var img2 = chrome.extension.getURL("img/emo2.png");
	var img3 = chrome.extension.getURL("img/emo4.png");
	
	var row = document.createElement("div");
	row.className = "row";
	row.style.textAlign = "center";
	row.style.color = "white";
	
	var col1 = document.createElement("div");
	col1.className = "col-md-4";
	col1.innerHTML = "<img id='cry' src="+img1+" style='width: 100%;'>";
	
	var col2 = document.createElement("div");
	col2.className ="col-md-4";
	col2.innerHTML = "<img id='happy' src="+img2+" style='width: 100%;'>";
	
	var col3 = document.createElement("div");
	col3.className ="col-md-4";
	col3.innerHTML = "<img id='angry' src="+img3+" style='width: 100%;'>";
	
	row.appendChild(col1);
	row.appendChild(col2);
	row.appendChild(col3);
	
	div.appendChild(row);
		
	document.body.appendChild(div);	
	
}