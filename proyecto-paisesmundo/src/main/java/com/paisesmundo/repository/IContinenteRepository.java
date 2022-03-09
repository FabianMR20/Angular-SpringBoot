package com.paisesmundo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paisesmundo.entiti.Continente;

@Repository
public interface IContinenteRepository extends JpaRepository<Continente, Integer> {

}
