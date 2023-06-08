package net.inventory.cablecount.model;

import java.util.UUID;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="cables")
public class cable {
	
	@Id
	private final UUID cableId = UUID.randomUUID();
	
	private String firstSide;
	private String secondSide;
	private double cableLength;
//	private category cableType;

	public cable() {}
	
	public cable(String firstSide, String secondSide, double cableLength) {
		super();
		this.firstSide = firstSide;
		this.secondSide = secondSide;
		this.cableLength= cableLength;
	}
}
