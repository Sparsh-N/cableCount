package net.inventory.cablecount.model;

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
	private Long cableId;

	private String firstSide;
	private String secondSide;
	private double cableLength;

	public cable(String firstSide, String secondSide) {
		this.firstSide = firstSide;
		this.secondSide = secondSide;
	}

}
