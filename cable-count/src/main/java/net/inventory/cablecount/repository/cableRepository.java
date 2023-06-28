package net.inventory.cablecount.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import net.inventory.cablecount.model.cable;
import java.util.List;

@Repository
public interface CableRepository extends MongoRepository<cable, Long> {
	
	List<cable> findAll();
	
	List<cable> findByFirstSide(String side);
	
	List<cable> findBySecondSide(String side);
	
	cable findByCableId(Long id);
	
}