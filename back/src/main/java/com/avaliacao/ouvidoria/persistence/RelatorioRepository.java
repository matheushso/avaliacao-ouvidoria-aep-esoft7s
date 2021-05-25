package com.avaliacao.ouvidoria.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avaliacao.ouvidoria.domain.model.Relatorio;

public interface RelatorioRepository extends JpaRepository<Relatorio, Long>{
	
}
