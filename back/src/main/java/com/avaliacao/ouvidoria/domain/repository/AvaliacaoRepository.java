package com.avaliacao.ouvidoria.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avaliacao.ouvidoria.domain.model.Avaliacao;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long>{
	
	Avaliacao findByProtocoloAndPerguntaLike(String protocolo, int pergunta);
	
}
