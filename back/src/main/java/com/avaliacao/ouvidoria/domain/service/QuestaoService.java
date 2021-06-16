package com.avaliacao.ouvidoria.domain.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avaliacao.ouvidoria.domain.model.Questao;
import com.avaliacao.ouvidoria.domain.repository.QuestaoRepository;

@Service
@Transactional
public class QuestaoService {
	
	@Autowired
	private QuestaoRepository repository;
	
	public List<Questao> findAll() {
		return repository.findAll();
	}
}
