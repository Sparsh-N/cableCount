package net.inventory.cablecount.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import net.inventory.cablecount.model.cable;
import net.inventory.cablecount.service.cableService;

@RestController
public class cableController {
	@Autowired
	public cableService cableServ;
	
	@GetMapping("/cables")
	public ResponseEntity<?> getAllCables() {
		List<cable> cables = cableServ.findAll();
		if (cables.size() > 0) {
			return new ResponseEntity<List<cable>> (cables, HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("No cables present.", HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/cables")
	public ResponseEntity<?> addCable(cable newCable) {
		cableServ.save(newCable);
	}

}
