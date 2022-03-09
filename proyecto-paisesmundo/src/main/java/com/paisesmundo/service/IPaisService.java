package com.paisesmundo.service;

import java.util.List;

import com.paisesmundo.entiti.Pais;

public interface IPaisService {
	
	List<Pais> listar();
	Pais crear(Pais pais);
	Pais editar(Pais pais);
	void eliminar (Integer id);
	Pais listarPorId(Integer id);
	

}
