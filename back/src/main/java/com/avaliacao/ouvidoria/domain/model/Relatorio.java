package com.avaliacao.ouvidoria.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "relatorio")
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Builder
public class Relatorio {
	@Id
	@EqualsAndHashCode.Include
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	@Column
	private int pergunta;
	
	@NotBlank
	@Column
	private String questao;
	
	@NotBlank
	@Column
	private int totalPerguntas;
	
	@NotBlank
	@Column
	private double mediaTotal;
	
	@NotBlank
	@Column
	private int menorResposta;
	
	@NotBlank
	@Column
	private int maiorResposta;
}