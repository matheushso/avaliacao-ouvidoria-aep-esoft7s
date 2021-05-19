package com.avaliacao.ouvidoria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AvaliacaoOuvidoriaApplication implements CommandLineRunner {

	@Autowired
//	private AdminRepository adminRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AvaliacaoOuvidoriaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
//		insterAdmin();
	}
	
//	private void insertRelatorio() {
		//TODO Realizar teste inserindo dados do relatório...
//	}

	public void insterAdmin() {
//		Admin admin1 = Admin.builder()
//				.cpf("4444")
//				.senha("senha4")
//				.build();
//		
//		adminRepository.save(admin1);
	}
	
}
