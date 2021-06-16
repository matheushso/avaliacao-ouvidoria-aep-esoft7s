package com.avaliacao.ouvidoria.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.avaliacao.ouvidoria.domain.model.Relatorio;

@Repository
public interface RelatorioRepository extends JpaRepository<Relatorio, Long>{
	
	@Query(value = "select * from relatorio order by pergunta",
			nativeQuery = true)
	List<Relatorio> findAll();
}
