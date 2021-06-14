package com.avaliacao.ouvidoria.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.avaliacao.ouvidoria.domain.model.Avaliacao;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long>{
	
	Avaliacao findByProtocoloAndPerguntaLike(String protocolo, int pergunta);
	
	//TODO Não considerar a tabela protocolo e resposta
	//TODO Passar @Query para RelatorioRepository, dai remover campos não necessários como os citados acima
	@Query(value = "select id, protocolo, pergunta, resposta, total_perguntas, round(soma_respostas/total_perguntas,2) media, menor_resposta, maior_resposta\r\n"
			+ "from\r\n"
			+ "(select id, protocolo, pergunta, resposta, count(pergunta) total_perguntas, sum(resposta) soma_respostas, min(resposta) menor_resposta, max(resposta) maior_resposta\r\n"
			+ "from avaliacao\r\n"
			+ "group by pergunta) soma_perguntas", 
	nativeQuery = true)
	List<Avaliacao> gerarRelatorio();
	
}
