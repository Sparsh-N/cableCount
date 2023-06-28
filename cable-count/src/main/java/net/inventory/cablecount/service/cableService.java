package net.inventory.cablecount.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import net.inventory.cablecount.model.cable;
import net.inventory.cablecount.repository.CableRepository;

@Service
public class CableService {
	
    @Autowired
	private MongoTemplate template;
	
	@Autowired
	private CableRepository cableRepository;
	
	public List<cable> findAll() {
		return cableRepository.findAll();
	}
	
	public List<cable> findByFirstSide(String side) {
		return cableRepository.findByFirstSide(side);
	}
	
	public List<cable> findBySecondSide(String side) {
		return cableRepository.findBySecondSide(side);
	}
	
	public cable findByCableId(Long id) {
		return cableRepository.findByCableId(id);
	}

	public void setCable(cable newCable) {
		cableRepository.save(newCable);
	}

	public void removeCable(cable toDelete) {
		cableRepository.delete(toDelete);
	}

}
