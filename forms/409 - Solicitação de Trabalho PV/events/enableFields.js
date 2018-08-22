function enableFields(form){ 
	
  		var atividade = getValue("WKNumState");
		
		if (atividade == 0 || atividade == 4)
			{
			form.setEnabled("trabalho", true);
			form.setEnabled("interno", true);
			form.setEnabled("externo", true);
			form.setEnabled("descricao", true);
			form.setEnabled("solicitante", true);
			form.setEnabled("ccusto", true);
			form.setEnabled("livro", true);
			form.setEnabled("livreto", true);
			form.setEnabled("manutencao", true);
			form.setEnabled("papelaria", true);
			form.setEnabled("animacao", true);
			form.setEnabled("site", true);
			form.setEnabled("apresentacao", true);
			form.setEnabled("ilustracao", true);
			form.setEnabled("eventos", true);
			form.setEnabled("sinalizacao", true);
			form.setEnabled("fotografia", true);
			form.setEnabled("folder", true);
			form.setEnabled("outros", true);
			form.setEnabled("outras", true);
			form.setEnabled("optionsRadiosSim", true);
			form.setEnabled("optionsRadiosNao", true);
			form.setEnabled("publicoalvo", true);
			form.setEnabled("dataentrega", true);   
			form.setEnabled("necessidivulgacao", true);
			}
		
		else	
			
			{
			form.setEnabled("trabalho", false);
			form.setEnabled("interno", false);
			form.setEnabled("externo", false);
			form.setEnabled("descricao", false);
			form.setEnabled("solicitante", false);
			form.setEnabled("ccusto", false);
			form.setEnabled("livro", false);
			form.setEnabled("livreto", false);
			form.setEnabled("manutencao", false);
			form.setEnabled("papelaria", false);
			form.setEnabled("animacao", false);
			form.setEnabled("site", false);
			form.setEnabled("apresentacao", false);
			form.setEnabled("ilustracao", false);
			form.setEnabled("eventos", false);
			form.setEnabled("sinalizacao", false);
			form.setEnabled("fotografia", false);
			form.setEnabled("folder", false);
			form.setEnabled("outros", false);
			form.setEnabled("outras", false);
			form.setEnabled("optionsRadiosSim", false);
			form.setEnabled("optionsRadiosNao", false);
			form.setEnabled("publicoalvo", false);
			form.setEnabled("dataentrega", false);   
			form.setEnabled("necessidivulgacao", false);
			}

}
