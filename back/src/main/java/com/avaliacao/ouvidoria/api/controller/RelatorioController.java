package com.avaliacao.ouvidoria.api.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.ListableBeanFactory;
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
	public void postRelatorio() {
		List<Avaliacao> gerarRelatorio = serviceAvaliacao.gerarRelatorio();
		List<Integer> perguntas = new ArrayList();
		int respostaAtual;
		int somaTotalDasRespostas = 0;
		
		String idRelatorio = UUID.randomUUID().toString();
		
		//TODO Alterar query para RelatorioRepository e adicionar todos os campos
		System.out.println(gerarRelatorio.size());
		if(!serviceAvaliacao.gerarRelatorio().isEmpty()) {
			System.out.println();
			System.out.println();
			System.out.println(serviceAvaliacao.gerarRelatorio());
//			Avaliacao relatorio = serviceAvaliacao.gerarRelatorio().get(0);
			
//			Relatorio relatorio = Relatorio.builder()
//			.idRelatorio(idRelatorio)
//			.pergunta(avaliacao.)
//			.totalPerguntas(avaliacao.get)
		}
	}
}
