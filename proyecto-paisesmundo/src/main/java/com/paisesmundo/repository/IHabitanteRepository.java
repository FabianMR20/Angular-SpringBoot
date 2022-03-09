package com.paisesmundo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paisesmundo.entiti.Habitante;

@Repository
public interface IHabitanteRepository extends JpaRepository<Habitante, Integer> {

}
