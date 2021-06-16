package com.avaliacao.ouvidoria.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.avaliacao.ouvidoria.domain.model.Relatorio;
import com.avaliacao.ouvidoria.domain.service.RelatorioService;

@RestController
@RequestMapping("/relatorio")
public class RelatorioController {
	
	@Autowired 
	private RelatorioService service;
	
	@GetMapping
	public List<Relatorio> getRelatorio() {
		return service.findAll();
	}
}
