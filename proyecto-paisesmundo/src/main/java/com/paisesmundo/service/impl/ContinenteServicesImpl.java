package com.paisesmundo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paisesmundo.entiti.Continente;
import com.paisesmundo.repository.IContinenteRepository;
import com.paisesmundo.service.IContinenteService;

@Service
public class ContinenteServicesImpl implements IContinenteService{
	
	@Autowired
	IContinenteRepository repo;

	@Override
	public List<Continente> listar() {
		return repo.findAll();
	}

	@Override
	public Continente crear(Continente continente) {
		return repo.save(continente);
	}

	@Override
	public Continente editar(Continente continente) {
		return repo.save(continente);
	}

	@Override
	public void eliminar(Integer id) {
		repo.deleteById(id);
		
	}

	@Override
	public Continente listarPorId(Integer id) {
		return repo.findById(id).orElse(null);
	}
	

}
