package com.avaliacao.ouvidoria.domain.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.avaliacao.ouvidoria.domain.repository.RelatorioRepository;

@Service
@Transactional
public class RelatorioService {
	
	@Autowired
	private RelatorioRepository repository;
}
