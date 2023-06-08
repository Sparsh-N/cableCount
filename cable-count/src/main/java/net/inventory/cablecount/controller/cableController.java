package net.inventory.cablecount.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.inventory.cablecount.model.cable;
import net.inventory.cablecount.service.CableService;

@RestController
public class CableController {
	
	@Autowired
	public CableService cableServ;
	
	@GetMapping("/cables")
	public ResponseEntity<?> getAllCables() {
		List<cable> cables = cableServ.findAll();
		if (cables.size() > 0) {
			return new ResponseEntity<List<cable>> (cables, HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("No cables present.", HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/cables/{side}")
	public ResponseEntity<?> getAllCablesBySide(@PathVariable String side) {
		List<cable> cables = cableServ.findAll();
		if (cables.size() > 0) {
			List<cable> cablesFirstSide = cableServ.findByFirstSide(side);
			List<cable> cablesSecondSide = cableServ.findBySecondSide(side);
			for (cable x : cablesFirstSide) {
				if (!cablesSecondSide.contains(x)) {
					cablesSecondSide.add(x);
				}
			}
			return new ResponseEntity<List<cable>> (cablesSecondSide, HttpStatus.OK);
		} else {
			return new ResponseEntity<String>("No cables with present in database.", HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/cables")
	public ResponseEntity<?> addCable(@RequestBody cable newCable) {
		try {
			cableServ.setCable(newCable);
			return new ResponseEntity<>("Cable added successfully", HttpStatus.CREATED);
		}
		catch (Exception e) {
			return new ResponseEntity<>("Cable not added" + e.getCause() , HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
