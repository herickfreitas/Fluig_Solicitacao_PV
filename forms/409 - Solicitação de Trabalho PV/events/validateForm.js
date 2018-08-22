function validateForm(form){
	var msg = "";
	
	
	if(form.getValue("trabalho") == "") { 
		msg +=  "<br>O campo Trabalho não foi preenchido."; 
	}
	if(form.getValue("interno") != "sim" && form.getValue("externo") != "sim") { 
		msg +=  "<br>O campo Necessidades de divulgação não foi selecionado."; 
	}	
	if(form.getValue("descricao") == "") { 
		msg +=  "<br>O campo Descricao não foi preenchido."; 
	}
	if(form.getValue("colleagueId") == "") { 
		msg +=  "<br>O campo Solicitante não foi preenchido."; 
	}
	if(form.getValue("secao") == "") { 
		msg +=  "<br>O campo Seção não foi preenchido."; 
	}
/*	if(form.getValue("revisaoSim").checked == false && form.getValue("revisaoNao").checked == false ) { 
		msg +=  "<br>O campo Precisará de revisão não foi selecionado."; 
	}*/
	if(form.getValue("publicoalvo") == "") { 
		msg +=  "<br>O campo Publico Alvo não foi preenchido."; 
	}
	if(form.getValue("dataentrega") == "") { 
		msg +=  "<br>O campo Data Entrega não foi preenchido."; 
	}
	if(form.getValue("necessidivulgacao") == "") { 
		msg +=  "<br>O campo Necessidade de Divulgacao não foi preenchido."; 
	}
	if(msg != "") { 
	throw msg; 
	}
}
