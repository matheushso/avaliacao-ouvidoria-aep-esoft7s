
package com.avaliacao.ouvidoria.persistence;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avaliacao.ouvidoria.domain.Avaliacao;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long>{

}
