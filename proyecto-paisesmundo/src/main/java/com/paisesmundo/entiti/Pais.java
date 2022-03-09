package com.paisesmundo.entiti;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the pais database table.
 * 
 */
@Entity
@NamedQuery(name="Pais.findAll", query="SELECT p FROM Pais p")
public class Pais implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idpais;

	private String capitalpais;

	@Column(name="cod_tel")
	private String codTel;

	private String iso2;

	private String iso3;

	private String nombrepais;

	//bi-directional many-to-one association to Habitante
	@OneToMany(mappedBy="pais")
	/*private List<Habitante> habitantes;*/

	//bi-directional many-to-one association to Continente
	@ManyToOne
	@JoinColumn(name="idcontinente")
	private Continente continente;

	public Pais() {
	}

	public int getIdpais() {
		return this.idpais;
	}

	public void setIdpais(int idpais) {
		this.idpais = idpais;
	}

	public String getCapitalpais() {
		return this.capitalpais;
	}

	public void setCapitalpais(String capitalpais) {
		this.capitalpais = capitalpais;
	}

	public String getCodTel() {
		return this.codTel;
	}

	public void setCodTel(String codTel) {
		this.codTel = codTel;
	}

	public String getIso2() {
		return this.iso2;
	}

	public void setIso2(String iso2) {
		this.iso2 = iso2;
	}

	public String getIso3() {
		return this.iso3;
	}

	public void setIso3(String iso3) {
		this.iso3 = iso3;
	}

	public String getNombrepais() {
		return this.nombrepais;
	}

	public void setNombrepais(String nombrepais) {
		this.nombrepais = nombrepais;
	}

	/*public List<Habitante> getHabitantes() {
		return this.habitantes;
	}

	public void setHabitantes(List<Habitante> habitantes) {
		this.habitantes = habitantes;
	}

	public Habitante addHabitante(Habitante habitante) {
		getHabitantes().add(habitante);
		habitante.setPai(this);

		return habitante;
	}

	public Habitante removeHabitante(Habitante habitante) {
		getHabitantes().remove(habitante);
		habitante.setPai(null);

		return habitante;
	}
*/
	public Continente getContinente() {
		return this.continente;
	}

	public void setContinente(Continente continente) {
		this.continente = continente;
	}

}