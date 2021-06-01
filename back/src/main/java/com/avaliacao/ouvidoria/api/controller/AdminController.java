package com.avaliacao.ouvidoria.api.controller;


import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	public ResponseEntity<?> getLogin(@RequestParam @Valid String cpf, @RequestParam String senha) {
		Admin login = service.login(cpf, senha);
		try {
			if (login != null) {
				return ResponseEntity.status(HttpStatus.OK).body("Logado com sucesso");
			}
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Login ou senha inválido");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Login ou senha inválido");
		}
	}
}
