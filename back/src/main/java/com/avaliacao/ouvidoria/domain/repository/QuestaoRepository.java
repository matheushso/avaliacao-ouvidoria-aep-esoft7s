package com.avaliacao.ouvidoria.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avaliacao.ouvidoria.domain.model.Questao;


@Repository
public interface QuestaoRepository extends JpaRepository<Questao, Long>{
	
	@Query(value = "select * from questao order by pergunta",
			nativeQuery = true)
	List<Questao> findAll();
	
}
