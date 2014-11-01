App.AlbumsRoute = Ember.Route.extend({
	model : function() {
		return this.store.find("album");		
	}
});