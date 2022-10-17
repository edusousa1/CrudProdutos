package com.projeto.crUD.config;

import java.time.Instant;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.projeto.crUD.model.Product;
import com.projeto.crUD.repositories.ProductRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {
	@Autowired
	private ProductRepository productRepository;

	@Override
	public void run(String... args) throws Exception {
		Product p1 = new Product(null, "computador", 100.00,Instant.parse("2022-06-20T20:53:07Z"));
		Product p2 = new Product(null, "notebook", 300.00,Instant.parse("2023-06-20T19:53:07Z"));
		Product p3 = new Product(null, "Tv", 500.00,Instant.parse("2023-06-20T19:53:07Z"));
		Product p4 = new Product(null, "Celular", 400.00,Instant.parse("2023-06-20T19:53:07Z"));
		Product p5 = new Product(null, "Geladeira", 900.00,Instant.parse("2023-06-20T19:53:07Z"));
		Product p6 = new Product(null, "Mesa", 200.00,Instant.parse("2023-06-20T19:53:07Z"));
		Product p7 = new Product(null, "Sofá", 300.00,Instant.parse("2023-06-20T19:53:07Z"));
		Product p8 = new Product(null, "Fogão", 400.00,Instant.parse("2023-06-20T19:53:07Z"));
		Product p9 = new Product(null, "Teclado", 350.00,Instant.parse("2023-06-20T19:53:07Z"));
		productRepository.saveAll(Arrays.asList(p1, p2,p3,p4,p5,p6,p7,p8,p9));

	}

}
