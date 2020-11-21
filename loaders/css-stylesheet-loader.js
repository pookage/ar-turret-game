module.exports = function(source){
	return `
		${source};

		var outputStyles;

		try {
			function pook__buildStyleSheet(){
				var styles = new CSSStyleSheet();
				styles.replace(result);
				return styles;
			}
			outputStyles = pook__buildStyleSheet();
		} catch(e){
			var styles = document.createElement("style");
			styles.innerHTML = result.toString();
			outputStyles = styles;
		}
		module.exports = outputStyles;
	`;
}
