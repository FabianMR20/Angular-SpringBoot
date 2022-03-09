package com.paisesmundo.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.paisesmundo.entiti.Habitante;
import com.paisesmundo.repository.IHabitanteRepository;
import com.paisesmundo.service.IHabitanteService;


public class HabitantesServicesImpl implements IHabitanteService{
	
	@Autowired
	IHabitanteRepository repo;

	@Override
	public List<Habitante> listar() {
		return repo.findAll();
	}

	@Override
	public Habitante crear(Habitante habitante) {
		return repo.save(habitante);
	}

	@Override
	public Habitante editar(Habitante habitante) {
		return repo.save(habitante);
	}

	@Override
	public void eliminar(Integer id) {
		repo.deleteById(id);
		
	}

	@Override
	public Habitante listarPorId(Integer id) {
		return repo.findById(id).orElse(null);
	}
	

}
