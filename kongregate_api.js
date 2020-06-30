kongregateAPI = {
	getAPI() {
		return {
			services:{
				getUsername() {return 'guest'},
			},
			stats:{
				submit(){},
			},
		};
	},
	loadAPI(func) {
		func();
	},
}