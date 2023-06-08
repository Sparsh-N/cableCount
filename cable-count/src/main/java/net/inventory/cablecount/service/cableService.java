package net.inventory.cablecount.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.inventory.cablecount.model.cable;
import net.inventory.cablecount.repository.CableRepository;

@Service
public class CableService {
	
	@Autowired
	private CableRepository cableRepo;
	
	public List<cable> findAll() {
		return cableRepo.findAll();
	}
	
	public List<cable> findByFirstSide(String side) {
		return cableRepo.findByFirstSide(side);
	}
	
	public List<cable> findBySecondSide(String side) {
		return cableRepo.findBySecondSide(side);
	}
	
	public cable findByCableId(UUID id) {
		return cableRepo.findByCableId(id);
	}

	public void setCable(cable newCable) {
		cableRepo.save(newCable);
	}

}
