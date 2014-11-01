App.AlbumEditController = App.BasicObjectController.extend({

	arrayActions : [ Em.Object.create({
		name : 'Save'
	}, {
		action : 'save'
	}), Em.Object.create({
		name : 'Cancel'
	}, {
		action : 'cancel'
	}) ],
	actions : {
		save : function() {
			var album = this.get("model");
			album.save();
			this.transitionToRoute('album', album);
		},
		cancel : function() {

			// model possui algumas propriedes para se verificar se o o model
			// esta limpo ou nao por exemplo
			var model = this.get("model");
			if (model && model.get('isDirty')) {
				model.rollback();
			}
			this.transitionToRoute('album', model);
		}
	}

});