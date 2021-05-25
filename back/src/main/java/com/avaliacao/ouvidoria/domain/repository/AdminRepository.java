package com.avaliacao.ouvidoria.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avaliacao.ouvidoria.domain.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{
	
	Admin findByCpfAndSenhaLike(String cpf, String senha);
	
//	@Query(value = "select a from Admin a where a.cpf = :cpf and a.senha = :senha")
//	List<Admin> encontrarAdmin(String cpf, senha);
	
}
