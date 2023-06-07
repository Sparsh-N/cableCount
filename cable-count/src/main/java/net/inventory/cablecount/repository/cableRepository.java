package net.inventory.cablecount.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mercedesbenz.cocdashboard.db.model.projectModel;

import net.inventory.cablecount.model.cable;
import java.util.List;

@Repository
public interface cableRepository extends MongoRepository<cable, String> {
	
	List<cable> findAll();
	
	List<cable> findByFirstSide();
	
	List<cable> findBySecondSide();
	
	List<cable> findByCableLength();
	
	List<cable> findByCableType();
	
	cable findByCableId();
	
}