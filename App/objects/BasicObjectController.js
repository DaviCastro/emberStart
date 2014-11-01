App.BasicObjectController = Ember.ObjectController.extend({

	actions : {
		panelActions : function(action) {
			this.send(action);
		},

	},

});