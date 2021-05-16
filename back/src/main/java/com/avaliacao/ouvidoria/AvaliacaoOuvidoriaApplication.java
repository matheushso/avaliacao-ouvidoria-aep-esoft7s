package com.avaliacao.ouvidoria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.avaliacao.ouvidoria.domain.Admin;
import com.avaliacao.ouvidoria.persistence.AdminRepository;

@SpringBootApplication
public class AvaliacaoOuvidoriaApplication implements CommandLineRunner {

	@Autowired
	private AdminRepository adminRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AvaliacaoOuvidoriaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		Admin admin = adminRepository.findById(1).get();
//		
//		insertRelatorio();
		
	}
	
	private void insertRelatorio() {
//		Relatorio relatorio = Relatorio.builder()
//				.data(format)
	
	}

	public void insterAdmin() {
		Admin admin1 = Admin.builder()
				.id(1L)			//ID NÃO É NECESSÁRIO PASSAR, POIS ELE É AUTO INCREMENT
				.cpf("111111")
				.senha("senha")
				.build();
		
		adminRepository.save(admin1);
	}
	
}
