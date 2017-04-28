//This code run inside web.whatsapp page

$("document").ready(function(){
	
	if(!isInCacheData())	
		createQuestionDiv();
	
	$("#button_ok").click(function(){
		savePersonalData($("#sexo").val(),$("#edad").val());
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
	
	var div = document.createElement("div");
	
	/*Styles*/
	div.style.top = "0px";
	div.style.left = "0px";
	div.style.position = "fixed";
	div.style.backgroundColor= "#5c9874";
	div.style.width = "250px";
	div.style.height = "100px";
	div.style.borderRadius = "5px";
	
	
	/*Inside the div*/
	var row = document.createElement("div");
	row.className = "row";
	row.style.marginTop = "5px";
	row.style.textAlign = "center";
	row.style.color = "white";
	
	var col1 = document.createElement("div");
	col1.className = "col-md-6";
	col1.innerHTML = "<p>SEXO</p><select class='form-control' style='width:90% !important;margin-left:5% !important;' id='sexo'><option>F</option><option>M</option></select>";
	
	var col2 = document.createElement("div");
	col2.className ="col-md-6";
	col2.innerHTML = "<p>EDAD</p><input type='text' class='form-control' id='edad' style='width:90% !important;margin-left:5% !important;' id='edad'>";
	
	row.appendChild(col1);
	row.appendChild(col2);	
	div.appendChild(row);
	
	var row2 = document.createElement("div");
	row2.className = "row";
	row2.style.textAlign = "center";
	row2.style.color = "white";
	
	var coldown = document.createElement("div");
	coldown.className = "col-md-12";
	coldown.innerHTML = "<button id='button_ok'>OK!</button>";	
	
	row2.appendChild(coldown);
	
	div.appendChild(row2);
	
	document.body.appendChild(div);
	
}