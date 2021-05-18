package com.avaliacao.ouvidoria.domain.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avaliacao.ouvidoria.domain.Admin;
import com.avaliacao.ouvidoria.persistence.AdminRepository;

@Service
@Transactional
public class AdminService {

	@Autowired
	private AdminRepository repository;
	
	public List<Admin> login(String cpf, String senha) {
//		return repository.findByCpfAndSenhaLike(cpf, senha);
		if(repository.findByCpfAndSenhaLike(cpf, senha).isEmpty()) {
			System.out.println("CPF ou Senha inválidos!");
			return null;
		} else {
			return repository.findByCpfAndSenhaLike(cpf, senha);
		}
		//TODO Tratar exception quando o cpf e/ou senha não são informados
	}
}