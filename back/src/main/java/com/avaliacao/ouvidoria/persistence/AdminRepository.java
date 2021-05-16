package com.avaliacao.ouvidoria.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avaliacao.ouvidoria.domain.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	List<Admin> findByCpfLike(String termo);
	
//	@Query(value = "select a from Admin a where a.cpf = :termo")
//	List<Admin> encontrarPeloCpf(String termo);
	
}
