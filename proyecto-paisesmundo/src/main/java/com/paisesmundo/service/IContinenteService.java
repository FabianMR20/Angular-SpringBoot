package com.paisesmundo.service;

import java.util.List;

import com.paisesmundo.entiti.Continente;

public interface IContinenteService {
	
	List<Continente> listar();
	Continente crear(Continente continente);
	Continente editar(Continente continente);
	void eliminar (Integer id);
	Continente listarPorId(Integer id);
	

}
