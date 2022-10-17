package com.projeto.crUD.model;

import java.time.Instant;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private Double preco;
	private Instant fabricacao;
	
	public Product() {
		
	}

	public Product(Long id, String name, Double preco, Instant fabricacao) {
		super();
		this.id = id;
		this.name = name;
		this.preco = preco;
		this.fabricacao = fabricacao;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public Instant getFabricacao() {
		return fabricacao;
	}

	public void setFabricacao(Instant fabricacao) {
		this.fabricacao = fabricacao;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", preco=" + preco + ", fabricacao=" + fabricacao + "]";
	}
	
}
