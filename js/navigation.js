class SideBarPopup{

	listItem = [];
	constructor(wrapContainer){
		this.container = jQuery(".sidebar-popup");
		this.closeBtn = jQuery(".sidebar-popup .close");
		this.bindEvent();
	}

	additem = (html) => this.listItem.push(html);

	getItemsAsHtml = () => {
		let html = "";
		for ( let item of this.listItem)
			html = html + item;
		return html;
	}

	displayItems = () => this.container.append(this.getItemsAsHtml());
	display = () => this.container.show();
	turnOff = () => this.container.hide();
	bindEvent = () => this.closeBtn.click(() => this.turnOff());
	

}

(function($){

	//init
	let menuToggle = $(".menu-toggle");
	
	menuToggle.click(function(){
		const sideBarPopup = new SideBarPopup();
		sideBarPopup.display();
	});

}(jQuery));


