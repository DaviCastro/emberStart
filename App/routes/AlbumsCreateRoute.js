App.AlbumsCreateRoute = Ember.Route.extend({
	model: function(){
		//retorna um novo objeto
		return Em.Object.create();
	},
	
	//Fala em qual template essa rota sera renderizada
	renderTemplate:function(){
		this.render('album.edit',{
			controller:'AlbumsCreate'
		});
		
	}
});