package com.avaliacao.ouvidoria.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avaliacao.ouvidoria.domain.model.Avaliacao;
import com.avaliacao.ouvidoria.domain.service.AvaliacaoService;

@RestController
@RequestMapping("/avaliacao")
public class AvaliacaoController {
	
	@Autowired
	private AvaliacaoService service;
	
	@PutMapping
	public String putAvaliacao(@RequestBody Avaliacao avaliacao){
		Avaliacao atualizarRespostaDaPergunta = service.buscarPergunta(avaliacao.getProtocolo(), avaliacao.getPergunta());
		if (atualizarRespostaDaPergunta != null) {
			atualizarRespostaDaPergunta.setResposta(avaliacao.getResposta());
			service.salvar(atualizarRespostaDaPergunta);
			return "Resposta da pergunta foi atualizada!";
		} else {
			service.salvar(avaliacao);
			return "Resposta registrada!";
		}
	}
}
