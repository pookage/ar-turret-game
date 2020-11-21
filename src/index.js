import { UTILS, STYLES } from "./shared/";

import components from "./components/";
import elements from "./elements/";
import primitives from "./primitives/";
import shaders from "./shaders/";

// register custom definitions
UTILS.register(window.customElements, "define", elements);
UTILS.register(window.AFRAME, "registerShader", shaders);
UTILS.register(window.AFRAME, "registerComponent", components);
UTILS.register(window.AFRAME, "registerPrimitive", primitives);

// register css variables
UTILS.adoptStyles(document, [
	STYLES.COLORS,
	STYLES.ANIMATIONS
]);
