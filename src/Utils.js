export const showDescription = () => {
	var imgWrapList = document.getElementsByClassName("img-wrap");

	var imgWrapClick = function () {
		var imgDescNode = this.childNodes[1];
		var styles = window.getComputedStyle(imgDescNode);
		var visibilityVal = styles.getPropertyValue("visibility");

		// Toggle image description visible/hidden
		if (visibilityVal === "hidden") {
			imgDescNode.style.visibility = "visible";
			imgDescNode.style.opacity = "1";
		}
		else {
			imgDescNode.style.visibility = "hidden";
			imgDescNode.style.opacity = "0";
		}
	}

	for (var i = 0; i < imgWrapList.length; i++) {
		imgWrapList[i].addEventListener("click", imgWrapClick, false);
	}
};
