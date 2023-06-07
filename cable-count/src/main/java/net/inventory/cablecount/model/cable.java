package net.inventory.cablecount.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;

import lombok.Getter;
import lombok.Setter;
import net.inventory.cablecount.model.port;

@Getter @Setter
public class cable {
	
	@Id
	private final UUID cableId = UUID.randomUUID();
	private port firstSide;
	private port secondSide;
	private double cableLength;
	private category cableType;

	public cable() {}
	
	public cable(port firstSide, port secondSide, double cableLength) {
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.cableLength= cableLength;
	}
}
