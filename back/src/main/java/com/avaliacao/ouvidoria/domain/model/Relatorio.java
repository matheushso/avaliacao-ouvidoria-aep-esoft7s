package com.avaliacao.ouvidoria.domain.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

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
	
	@Column
	private String data_inicial;
	
	@Column 
	private String data_final;
	
	@Column
	private Integer media_geral;

	@ManyToOne
	@JoinColumn(name = "admin_id")
	private Admin admin_id;
	
	@ManyToOne
	@JoinColumn(name = "avaliacao_id")
	private Avaliacao avaliacao_id;
	
}