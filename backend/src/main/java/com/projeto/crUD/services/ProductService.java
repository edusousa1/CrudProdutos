package com.projeto.crUD.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.projeto.crUD.exceptions.DatabaseException;
import com.projeto.crUD.exceptions.ResourceNotFoundException;
import com.projeto.crUD.model.Product;
import com.projeto.crUD.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository ProductRepository;

	public List<Product> findAll() {
		return ProductRepository.findAll();
	}

	public Product findById(Long id) {
		Optional<Product> obj = ProductRepository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public Product insert(Product obj) {
		return ProductRepository.save(obj);
	}

	public Product update(Long id, Product obj) {
		Product entity = ProductRepository.getReferenceById(id);
		updateData(entity, obj);
		return ProductRepository.save(entity);

	}

	public void updateData(Product entity, Product obj) {
		entity.setName(obj.getName());
		entity.setPreco(obj.getPreco());
		entity.setFabricacao(obj.getFabricacao());

	}

	public void delete(Long id) {
		try {
			ProductRepository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}

	}

}
