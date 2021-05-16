package com.avaliacao.ouvidoria.domain;
//package com.avaliacao.ouvidoria.domain.service;
//
//import java.util.Date;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.persistence.Table;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.EqualsAndHashCode;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//@Table(name = "relatorio")
//@Entity
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@EqualsAndHashCode(onlyExplicitlyIncluded = true)
//@Builder
//public class Relatorio {
//	
//	@Id
//	@EqualsAndHashCode.Include
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id;
//	
//	@Column
//	private Date data;
//	
//	@Column
//	private Integer mediaGeral;
//
//	@ManyToOne
//	@JoinColumn(name = "admin_id")
//	private Admin admin_id;
//}
