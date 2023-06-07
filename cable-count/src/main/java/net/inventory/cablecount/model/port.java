package net.inventory.cablecount.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class port {
	private String portType;
	private boolean isMale;
	public port() {}
	public port(String portType, boolean isMale) {
		this.portType = portType;
		this.isMale = isMale;
	}
}
