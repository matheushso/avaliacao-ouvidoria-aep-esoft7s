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
		List<Avaliacao> todasAvaliacao = serviceAvaliacao.buscarTodos();
		List<Integer> perguntas = new ArrayList();
		
		String idRelatorio = UUID.randomUUID().toString();
		
		System.out.println(todasAvaliacao.size());
		System.out.println();
		if(!serviceAvaliacao.buscarTodos().isEmpty()) {
			for (int count = 0; count < todasAvaliacao.size() ; count++) {
				
				int perguntaAtual = todasAvaliacao.get(count).getPergunta();
				
				int respostaAtual = todasAvaliacao.get(count).getResposta();
				
				if(!perguntas.contains(todasAvaliacao.get(count).getPergunta())) {
					perguntas.add(perguntaAtual);
				}
				
				System.out.println(perguntas);
				
				//TODO Dentro do looping pegar todas as respostas das perguntas e calcular a media
				//TODO Armazenar e comparar se a pergunta já existe na lista, se já armazenar a resposta junto com a que já está la
				
				//int somaTotalValorPerguntas =+ todasAvaliacao.get(count).getResposta();
				
			}
		} else {
			//TODO Somar mediaPergunta corretamente
			System.out.println("Lista vazia!");
		}
		
//		Relatorio relatorio = Relatorio.builder()
//				.idRelatorio(idRelatorio)
//				.pergunta(pergunta)
//				.mediaPergunta(10).build();
//		
//		count++;
//		serviceRelatorio.salvar(relatorio);
	
	}
	
}
