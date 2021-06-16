package com.avaliacao.ouvidoria.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avaliacao.ouvidoria.domain.model.Admin;
import com.avaliacao.ouvidoria.domain.repository.AdminRepository;

@Service
@Transactional
public class AdminService {

	@Autowired
	private AdminRepository repository;
	
	public Admin login(String usuario, String senha) {
		return repository.findByUsuarioAndSenhaLike(usuario, senha);
	}
}