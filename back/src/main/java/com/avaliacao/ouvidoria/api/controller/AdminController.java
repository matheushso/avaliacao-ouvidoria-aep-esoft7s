package com.avaliacao.ouvidoria.api.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.avaliacao.ouvidoria.domain.model.Admin;
import com.avaliacao.ouvidoria.domain.service.AdminService;

@RestController
@RequestMapping("/login")
public class AdminController {

	@Autowired
	private AdminService service;
	
	@GetMapping
	public Admin getLogin(@RequestParam @Valid String cpf, @RequestParam String senha) {
		return service.login(cpf, senha);
	}
}
