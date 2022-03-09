package com.paisesmundo.service;

import java.util.List;

import com.paisesmundo.entiti.Habitante;
import com.paisesmundo.entiti.Pais;

public interface IHabitanteService {
	
	List<Habitante> listar();
	Habitante crear(Habitante continente);
	Habitante editar(Habitante continente);
	void eliminar (Integer id);
	Habitante listarPorId(Integer id);
	

}
