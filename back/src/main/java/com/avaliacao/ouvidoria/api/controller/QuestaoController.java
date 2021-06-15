package com.avaliacao.ouvidoria.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avaliacao.ouvidoria.domain.model.Questao;
import com.avaliacao.ouvidoria.domain.service.QuestaoService;

@RestController
@RequestMapping("/questao")
public class QuestaoController {
	
	@Autowired
	private QuestaoService service;
	
	@GetMapping
	public List<Questao> getQuestao() {
		return service.findAll();
		
	}
}
