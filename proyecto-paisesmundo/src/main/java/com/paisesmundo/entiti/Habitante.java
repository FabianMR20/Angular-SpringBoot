package com.paisesmundo.entiti;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the habitante database table.
 * 
 */
@Entity
@NamedQuery(name="Habitante.findAll", query="SELECT h FROM Habitante h")
public class Habitante implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idhabitante;

	private String usuario;
	
	private String contraseña;

	@Temporal(TemporalType.DATE)
	private Date fechanac;

	private String nombre;
	
	private String apellidos;

	private String telefono;

	/* private byte imagen;*/
	
	//bi-directional many-to-one association to Pais
	@ManyToOne
	@JoinColumn(name="idpais")
	private Pais pais;

	public Habitante() {
	}

	public int getIdhabitante() {
		return this.idhabitante;
	}

	public void setIdhabitante(int idhabitante) {
		this.idhabitante = idhabitante;
	}

	public String getApellidos() {
		return this.apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getContraseña() {
		return this.contraseña;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}

	public Date getFechanac() {
		return this.fechanac;
	}

	public void setFechanac(Date fechanac) {
		this.fechanac = fechanac;
	}

	/*public byte getImagen() {
		return this.imagen;
	}

	public void setImagen(byte imagen) {
		this.imagen = imagen;
	}*/

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getTelefono() {
		return this.telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	public String getUsuario() {
		return this.usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public Pais getPais() {
		return this.pais;
	}

	public void setPais(Pais pais) {
		this.pais = pais;
	}

}