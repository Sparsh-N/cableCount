package net.inventory.cablecount;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories("net.inventory.*")
public class CableCountApplication {

	public static void main(String[] args) {
		SpringApplication.run(CableCountApplication.class, args);
	}

}
