(function($){
	//Sidebar Popup
	let menuToggle = $(".menu-toggle");
	let mainWrapper = $("#page");
	let sidebarPopupHtml = "<div class='sidebar-popup'><button class='close'>X</button></div>";
	let sidebarCloseBtnSelector= ".sidebar-popup .close";
	let sidebarPopup = $(".sidebar-popup");  

	menuToggle.click(function(){
		mainWrapper.append(sidebarPopupHtml);
	});

	mainWrapper.on("click", sidebarCloseBtnSelector, function(){
		$(".sidebar-popup").hide();
	});


}(jQuery));