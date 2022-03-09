package com.paisesmundo.controller;

import java.net.URI;
import java.util.List;

import javax.servlet.Servlet;

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
import com.paisesmundo.entiti.Pais;
import com.paisesmundo.service.IPaisService;

@RestController
@RequestMapping("/pais")
public class PaisController {

	@Autowired
	private IPaisService service;

	@GetMapping
	public ResponseEntity<List<Pais>> listar() {
		List<Pais> obj = service.listar();
		return new ResponseEntity<List<Pais>>(obj, HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Pais> crear(@RequestBody Pais pais) {

		Pais obj = service.crear(pais);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdpais()).toUri();

		return ResponseEntity.created(uri).build();
	}

	@PutMapping
	public ResponseEntity<Pais> editar(@RequestBody Pais pais) {
		Pais obj = service.editar(pais);
		return new ResponseEntity<Pais>(obj, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception {
		Pais obj = service.listarPorId(id);
		if (obj == null) {
			throw new Exception("Id no encontrado");
		}
		service.eliminar(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Pais> listarPorId(@PathVariable("id") Integer id) throws Exception {

		Pais obj = service.listarPorId(id);
		if (obj == null) {
			throw new Exception("Id no encontrado");
		}
		return new ResponseEntity<Pais>(obj, HttpStatus.OK);

	}

}
