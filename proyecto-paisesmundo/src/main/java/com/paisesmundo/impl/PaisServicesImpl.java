package com.paisesmundo.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.paisesmundo.entiti.Pais;
import com.paisesmundo.repository.IPaisRepository;
import com.paisesmundo.service.IPaisService;

public class PaisServicesImpl implements IPaisService{
	
	@Autowired
	IPaisRepository repo;

	@Override
	public List<Pais> listar() {
		return repo.findAll();
	}

	@Override
	public Pais crear(Pais pais) {
		return repo.save(pais);
	}

	@Override
	public Pais editar(Pais pais) {
		return repo.save(pais);
	}

	@Override
	public void eliminar(Integer id) {
		repo.deleteById(id);
		
	}

	@Override
	public Pais listarPorId(Integer id) {
		return repo.findById(id).orElse(null);
	}
	
	

}
