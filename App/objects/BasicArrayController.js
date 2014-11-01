App.BasicArrayController = Ember.ArrayController.extend({

	actions : {
		panelActions : function(action) {
			this.send(action)
		},
	},

});