package com.paisesmundo.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.paisesmundo.entiti.Habitante;
import com.paisesmundo.service.IHabitanteService;

@RestController
@RequestMapping("/habitante")
public class HabitanteController {

	@Autowired
	IHabitanteService service;
	
	@GetMapping
	public ResponseEntity<List<Habitante>> listar() {
		List<Habitante> obj = service.listar();
		return new ResponseEntity<List<Habitante>>(obj,HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Habitante> crear(@RequestBody  Habitante habitante) {
		/*Habitante obj = service.crear(habitante);
		return new ResponseEntity<Habitante>(obj,HttpStatus.OK);*/
		Habitante obj = service.crear(habitante);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdhabitante()).toUri();

		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping
	public ResponseEntity<Habitante> editar(@RequestBody  Habitante habitante) {
		Habitante obj = service.editar(habitante);
		return new ResponseEntity<Habitante>(obj,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
		Habitante obj = service.listarPorId(id);
		if (obj == null) {
			throw new Exception("Id no encontrado");
		}
		service.eliminar(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Habitante> listarPorId (@PathVariable("id") Integer id) throws Exception{
		
		Habitante obj = service.listarPorId(id);
		if (obj == null) {
			throw new Exception("Id no encontrado");
		}
		return new ResponseEntity<Habitante>(obj ,HttpStatus.OK);
		
	}
}
