package com.avaliacao.ouvidoria.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avaliacao.ouvidoria.domain.Avaliacao;
import com.avaliacao.ouvidoria.domain.service.AvaliacaoService;

@RestController
@RequestMapping("/avaliacao")
public class AvaliacaoController {
	
	@Autowired
	private AvaliacaoService service;
	
	@PostMapping
	public String post(@RequestBody Avaliacao novo){
		Avaliacao salvar = service.salvar(novo);
		return "Salvando Avaliacao";
	}
}
