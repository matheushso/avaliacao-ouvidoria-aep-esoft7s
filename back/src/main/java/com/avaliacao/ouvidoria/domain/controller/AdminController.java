package com.avaliacao.ouvidoria.domain.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.avaliacao.ouvidoria.domain.Admin;
import com.avaliacao.ouvidoria.domain.service.AdminService;

@RestController
@RequestMapping("/login")
public class AdminController {

	@Autowired
	private AdminService service;
	
	@GetMapping
	public List<Admin> getLogin(@RequestParam String cpf, @RequestParam String senha) {
		return service.login(cpf, senha);
	}
}
