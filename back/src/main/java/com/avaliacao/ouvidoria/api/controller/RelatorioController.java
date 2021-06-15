package com.avaliacao.ouvidoria.api.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avaliacao.ouvidoria.domain.model.Relatorio;
import com.avaliacao.ouvidoria.domain.service.RelatorioService;

@RestController
@RequestMapping("/relatorio")
public class RelatorioController {
	
	@Autowired 
	private RelatorioService service;
	
	@PostMapping
	public void postRelatorio() {
		
		String idRelatorio = UUID.randomUUID().toString();
		
		if(!service.gerarRelatorio().isEmpty()) {
			for (int count = 0; count < service.gerarRelatorio().size(); count++) {
				
				int pergunta = service.gerarRelatorio().get(count).getPergunta();
				int totalPerguntas = service.gerarRelatorio().get(count).getTotalPerguntas();
				double mediaTotal = service.gerarRelatorio().get(count).getMediaTotal();
				int menorResposta = service.gerarRelatorio().get(count).getMenorResposta();
				int maiorResposta = service.gerarRelatorio().get(count).getMaiorResposta();
				
				Relatorio relatorio = Relatorio.builder()
				 	.idRelatorio(idRelatorio)
				 	.pergunta(pergunta)
				 	.totalPerguntas(totalPerguntas)
				 	.mediaTotal(mediaTotal)
				 	.menorResposta(menorResposta)
				 	.maiorResposta(maiorResposta)
				 	.build();
				 
				service.salvar(relatorio);
			}
		}
	}
	
	@GetMapping
	public List<Relatorio> getRelatorio() {
		return service.findAll();
		
	}
}
