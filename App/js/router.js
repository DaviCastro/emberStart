App.Router.map(function(){
	this.resource('albums',function(){
		this.resource('album',{ path: ':album_id' },function(){
			this.route('edit');
		});
		
		this.route('create');
	});
	
	this.resource('home',{path:'/'});
});

