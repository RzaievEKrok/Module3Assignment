$(document).ready(function() {
	$(document.body).click(function () {
		if ($("#navbarSupportedContent:first").is(":hidden")) {
			$("#navbarSupportedContent").slideDown("slow");
		} else {
			$("#navbarSupportedContent").hide();
		}
	});
});
