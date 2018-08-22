function displayFields(form,customHTML){ 

/* Variável global que informa o numero da etapa do processo */
var atividade = getValue("WKNumState"); 

customHTML.append("<script> var atividade = "+atividade+";</script>");

/* Só executa na atividade inicial */
if(atividade == 0 || atividade == 4) {	
	/* Coleta data e a associa campo do formulário */
	var data = new Date();
    var formatoData = new java.text.SimpleDateFormat("dd/MM/yyyy");
    form.setValue("data_preenchimento", formatoData.format(data));
    
    /* Coleta dados do usuário corrente e a associa campos do formulário */
    var usuario = fluigAPI.getUserService().getCurrent();
	form.setValue("user_solicitante", usuario.getCode());
	form.setValue("nome_solicitante", usuario.getFullName());
	
	}

}

