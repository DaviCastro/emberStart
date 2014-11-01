App.AlbumEditRoute = Ember.Route.extend({
	model : function() {
		return this.modelFor("album");
	},

	renderTemplate : function() {
		this.render('album.edit', {
			into : 'albums'
		})
	}
});