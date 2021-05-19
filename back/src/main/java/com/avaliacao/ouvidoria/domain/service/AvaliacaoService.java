package com.avaliacao.ouvidoria.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avaliacao.ouvidoria.domain.Avaliacao;
import com.avaliacao.ouvidoria.persistence.AvaliacaoRepository;


@Service
@Transactional
public class AvaliacaoService {

	@Autowired
	private AvaliacaoRepository repository;
	
	public Avaliacao salvar(Avaliacao avaliacao){
		return repository.save(avaliacao);
	}
	
	
}
