App.AlbumsCreateController = App.BasicObjectController.extend({
	content: {},
	arrayActions : [Em.Object.create({name: 'Save'},{action:'save'})],
	
	actions:{		
		save:function(){
			var album = this.store.createRecord('album', this.get('model'));
			album.save();
			this.transitionToRoute('album',album);		
		},
		
	}
	
});