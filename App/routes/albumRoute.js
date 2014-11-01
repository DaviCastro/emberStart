App.AlbumRoute = Ember.Route.extend({
	model : function(params) {
		return this.store.find('album', params.album_id);
	},

	renderTemplate : function() {
		this.render('album', {
			into : 'albums'
		})
	}
});