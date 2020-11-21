export function register(defInterface, define, definitions){
	for(const definition of definitions){
		for(const [ name, value ] of Object.entries(definition)){
			defInterface[define](name, value);
		}
	}
}// register

export function adoptStyles(shadow, styles){
	if(styles[0] instanceof HTMLElement){
		for(const style of styles){
			shadow.appendChild(style.cloneNode(true));
		}
	} else {
		shadow.adoptedStyleSheets = [ ...styles ]
	}
}// adoptStyles

export function radToDeg(rad){
	return (180 / Math.PI) * rad;
}// radToDeg
