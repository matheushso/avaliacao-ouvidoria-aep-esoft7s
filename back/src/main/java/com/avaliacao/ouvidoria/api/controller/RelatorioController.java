package com.avaliacao.ouvidoria.api.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avaliacao.ouvidoria.domain.model.Avaliacao;
import com.avaliacao.ouvidoria.domain.model.Relatorio;
import com.avaliacao.ouvidoria.domain.service.AvaliacaoService;
import com.avaliacao.ouvidoria.domain.service.RelatorioService;

@RestController
@RequestMapping("/relatorio")
public class RelatorioController {
	
	@Autowired 
	private RelatorioService serviceRelatorio;
	
	@Autowired 
	private AvaliacaoService serviceAvaliacao;
	
	@PostMapping
	public Relatorio postRelatorio() {
		List<Avaliacao> todasAvaliacao = serviceAvaliacao.buscarTodos();
		int count;
		
		UUID idRelatorio = UUID.randomUUID();
		
//		if(!serviceAvaliacao.buscarTodos().isEmpty()) {
//			count++;
//			int pergunta = todasAvaliacao.get(count).getPergunta();
//			
//			//int somaTotalValorPerguntas =+ todasAvaliacao.get(count).getResposta();
//			
//			Relatorio relatorio = Relatorio.builder()
//					.idRelatorio(idRelatorio)
//					.pergunta(pergunta)
//					.mediaPergunta(10).build();
//			
//			
//			return null;
//			
//		}
		
		//TODO Somar mediaPergunta corretamente
		
		return null;
				
	}
	
}
