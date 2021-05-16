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
	
	public List<Admin> encontrarTodos(String termo) {
		if (termo == null || termo.trim().length() == 0) {
			return repository.findAll();
		} else {
			return repository.findByCpfLike(termo);
		}
	}
}
