package com.paisesmundo.entiti;

import java.io.Serializable;
import javax.persistence.*;


/**
 * The persistent class for the continente database table.
 * 
 */
@Entity
@NamedQuery(name="Continente.findAll", query="SELECT c FROM Continente c")
public class Continente implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idcontinente;

	/*private int continente;*/

	private String nombre;

	/*//bi-directional many-to-one association to Pais
	@OneToMany(mappedBy="continente")
	private List<Pais> pais;*/

	public Continente() {
	}

	public int getIdcontinente() {
		return this.idcontinente;
	}

	public void setIdcontinente(int idcontinente) {
		this.idcontinente = idcontinente;
	}
/*
	public int getContinente() {
		return this.continente;
	}

	public void setContinente(int continente) {
		this.continente = continente;
	}
*/
	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	/*
	
	public List<Pais> getPais() {
		return this.pais;
	}

	public void setPais(List<Pais> pais) {
		this.pais = pais;
	}

	public Pais addPai(Pais pai) {
		getPais().add(pai);
		pai.setContinente(this);

		return pai;
	}

	public Pais removePai(Pais pai) {
		getPais().remove(pai);
		pai.setContinente(null);

		return pai;
	}*/

}