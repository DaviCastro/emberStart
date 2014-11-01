App.AlbumsController = App.BasicArrayController.extend({
	sortProperties : [ 'name' ],
	sortAscending : true,

	albumContador : function() {
		return this.get('model.length');
	}.property('@each'),

	arrayActions : [ Em.Object.create({
		name : 'New'
	}, {
		action : 'newAlbum'
	}) ],

	actions : {
		newAlbum : function() {
			this.transitionToRoute('albums.create');
		}
	}

});