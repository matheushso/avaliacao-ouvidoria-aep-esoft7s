package com.avaliacao.ouvidoria.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avaliacao.ouvidoria.domain.model.Avaliacao;
import com.avaliacao.ouvidoria.domain.repository.AvaliacaoRepository;

@Service
@Transactional
public class AvaliacaoService {

	@Autowired
	private AvaliacaoRepository repository;
	
	public Avaliacao salvar(Avaliacao avaliacao) {
		repository.flush();
		return repository.saveAndFlush(avaliacao);
	}
	
	public Avaliacao buscarPergunta(String protocolo, int pergunta) {
		return repository.findByProtocoloAndPerguntaLike(protocolo, pergunta);
	}
}
