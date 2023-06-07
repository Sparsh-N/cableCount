package net.inventory.cablecount.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.inventory.cablecount.repository.cableRepository;
import net.inventory.cablecount.model.cable;

@Service
public class cableService {
	
	@Autowired
	private cableRepository cableRepo;
	
	public List<cable> findAll() {
		return cableRepo.findAll();
	}

}
