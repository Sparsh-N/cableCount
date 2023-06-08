package net.inventory.cablecount.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import net.inventory.cablecount.model.cable;
import java.util.List;
import java.util.UUID;

@Repository
public interface CableRepository extends MongoRepository<cable, String> {
	
	List<cable> findAll();
	
	List<cable> findByFirstSide(String side);
	
	List<cable> findBySecondSide(String side);
	
	cable findByCableId(UUID id);
	
}