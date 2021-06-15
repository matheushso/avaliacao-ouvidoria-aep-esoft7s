package com.avaliacao.ouvidoria.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.avaliacao.ouvidoria.domain.model.Relatorio;

public interface RelatorioRepository extends JpaRepository<Relatorio, Long>{
	
	@Query(value = "select id, id_relatorio, pergunta, total_perguntas, round(soma_respostas/total_perguntas,2) media_total, menor_resposta, maior_resposta\r\n"
				 + "from\r\n"
				 + "(select id, null id_relatorio, pergunta, count(pergunta) total_perguntas, sum(resposta) soma_respostas, min(resposta) menor_resposta, max(resposta) maior_resposta\r\n"
				 + "from avaliacao\r\n"
				 + "group by pergunta) soma_perguntas;", 
	nativeQuery = true)
	List<Relatorio> gerarRelatorio();
	
	@Query(value = "select * from relatorio order by pergunta",
			nativeQuery = true)
	List<Relatorio> findAll();
}
