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

import com.paisesmundo.entiti.Continente;
import com.paisesmundo.service.IContinenteService;

@RestController
@RequestMapping("/continente")
public class ContinenteController {
	
	@Autowired
	private IContinenteService service;
	
	@GetMapping 
	public ResponseEntity<List<Continente>> listar() {
		List<Continente> obj = service.listar();
		return new ResponseEntity<List<Continente>>(obj,HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Continente> crear(@RequestBody  Continente continente) {
		/*Continente obj = service.crear(continente);
		return new ResponseEntity<Continente>(obj,HttpStatus.OK);*/
		Continente obj = service.crear(continente);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdcontinente()).toUri();

		return ResponseEntity.created(uri).build();
	}
	
	@PutMapping
	public ResponseEntity<Continente> editar(@RequestBody  Continente continente) {
		Continente obj = service.editar(continente);
		return new ResponseEntity<Continente>(obj,HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
		Continente obj = service.listarPorId(id);
		if (obj == null) {
			throw new Exception("Id no encontrado");
		}
		service.eliminar(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Continente> listarPorId (@PathVariable("id") Integer id) throws Exception{
		
		Continente obj = service.listarPorId(id);
		if (obj == null) {
			throw new Exception("Id no encontrado");
		}
		return new ResponseEntity<Continente>(obj ,HttpStatus.OK);
		
	}
	
}
