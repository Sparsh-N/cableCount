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

	private enum Port {
		HDMI, Lightning, DP, VGA,
		Laptop_Mac, Laptop_HP, Laptop_Power_Cable,
		USBA, USBC;
	}

	private enum Category {
		Display, Laptop, Mobile;
	}

	private Port firstSide;
	private Port secondSide;
	private double cableLength;
	private Category cableType;

	public cable(Port first, Port second, double cableLength) {
		this.firstSide = first;
		this.secondSide = second;
		this.cableLength = cableLength;
	}
}
