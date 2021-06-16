package com.avaliacao.ouvidoria.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avaliacao.ouvidoria.domain.model.Avaliacao;

@Repository
public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long>{
	
	Avaliacao findByProtocoloAndPerguntaLike(String protocolo, int pergunta);
}
