package com.avaliacao.ouvidoria.api.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
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
	
	@PostMapping
	public String post(@RequestBody @Valid Avaliacao novo){
		service.salvar(novo);
		return "Salvando Avaliacao";
	}
}
