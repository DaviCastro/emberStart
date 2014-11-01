App.PanelPrimaryComponent = Ember.Component.extend({
	
	 setupIds: function(){
	        this.setProperties({ 
	        	collapseId: "collapse" + this.get('customId'),
	        	hrefCollapseId:"#" + this.get('customId'),
	        	myModalId: "myModal" + this.get('customId')
	        });
	    }.on("init"),
	actions : {
		panelActions : function(obj) {
			
			if(obj.action==="delete") this.send('delete');
			else
			 this.sendAction('panelActions',obj.action);
		},
		delete:function(){
			var jqueryModalId = "#"+ this.get('myModalId');
			$(jqueryModalId).modal('toggle')
		},
		cancelDelete:function(){
			this.set('deleteMode',false);				
		},
		confirmDelete:function(){
			$(".close").click();
			this.sendAction('panelActions','confirmDelete');
		},
		
		collapse:function(){
			var jQueryCollpaseId= "#"+this.get('collapseId');
			if($(jQueryCollpaseId).hasClass("glyphicon-collapse-down")){
				$(jQueryCollpaseId).removeClass("glyphicon-collapse-down").addClass("glyphicon-collapse-up")
			}
			else{
				$(jQueryCollpaseId).removeClass("glyphicon-collapse-up").addClass("glyphicon-collapse-down")
			}
		}
	}
});