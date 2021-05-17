package com.avaliacao.ouvidoria.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.avaliacao.ouvidoria.domain.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	List<Admin> findByCpfAndSenhaLike(String cpf, String senha);
	
//	@Query(value = "select a from Admin a where a.cpf = :cpf and a.senha = :senha")
//	List<Admin> encontrarAdmin(String cpf, senha);
	
}
