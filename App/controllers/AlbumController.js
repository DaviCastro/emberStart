App.AlbumController = App.BasicObjectController.extend({
	
	arrayActions : [Em.Object.create({name: 'Edit'},{action:'edit'}),Em.Object.create({name: 'Delete'},{action:'delete'})],
	
	actions : {
		
			edit:function(){
				this.transitionToRoute('album.edit'); 
			},
			confirmDelete:function(){
				this.get('model').deleteRecord();
				this.get('model').save();
				this.transitionToRoute('albums');
			}
	}
});