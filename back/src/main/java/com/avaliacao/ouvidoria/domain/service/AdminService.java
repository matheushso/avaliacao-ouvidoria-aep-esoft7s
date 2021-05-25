package com.avaliacao.ouvidoria.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avaliacao.ouvidoria.domain.model.Admin;
import com.avaliacao.ouvidoria.domain.repository.AdminRepository;

@Service
@Transactional
public class AdminService {

	//TODO Tratar exception quando o cpf e/ou senha não são informados
	
	@Autowired
	private AdminRepository repository;
	
	public Admin login(String cpf, String senha) {
		return repository.findByCpfAndSenhaLike(cpf, senha);
	}
}


//ResponseStatusException responseStatusException = new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Usuário não autorizado.");
//if(repository.findByCpfAndSenhaLike(cpf, senha).isEmpty()) {
//	var status = HttpStatus.UNAUTHORIZED;
//	return responseStatusException;
//} else {
//	return repository.findByCpfAndSenhaLike(cpf, senha);
//}