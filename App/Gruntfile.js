module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	/*
	 * Com o plugin acima nao e necessario a declaracao abaixo // Plugins do
	 * Grunt grunt.loadNpmTasks('grunt-contrib-uglify');
	 * grunt.loadNpmTasks('grunt-contrib-less');
	 * grunt.loadNpmTasks('grunt-wiredep'); grunt.loadNpmTasks(
	 * 'grunt-contrib-watch' ); grunt.loadNpmTasks('grunt-contrib-copy');
	 * grunt.loadNpmTasks('grunt-bower-install-simple');
	 * grunt.loadNpmTasks('grunt-usemin');
	 * 
	 */
	grunt
			.initConfig({
				config : {
					path : {
						webapp : {
							root : 'src/main/webapp'
						},
						index : {
							root : 'App/'
						}
					}
				},
				// copia index original para webapp
				/*
				 * copy: { build: { files: [ { src: '<%= config.path.index.root
				 * %>/index.html', dest: '<%= config.path.webapp.root
				 * %>/index.html' } ] } },
				 */
				// pre processador de csss
				less : {
					development : {
						files : {
							"<%= config.path.webapp.root %>/css/app.css" : "App/css/appcss.less"
						}
					}
				},
				// minimifica o arquivo js
			/*	uglify : {
					options : {
						mangle : false
					},

					my_target : {
						files : {
							'<%= config.path.webapp.root %>/js/app.min.js' : [
									'App/js/*.js', 'App/models/*.js',
									'App/routes/*.js', 'App/controllers/*.js', ]
						}
					}
				},*/
			/*	// copia as depedencias do bower para o index.html
				wiredep : {
					options : {
						directory : '<%= config.path.webapp.root %>/lib'
					},

					target : {
						src : '<%= config.path.webapp.root %>/index.html',
						ignorePath : '<%= config.path.webapp.root %>'

					}
				},*/
				// automaticamente verifica mudanca no arquivos e executa os
				// plugins
				watch : {
					dist : {
						files : [ 'App/**/*', ],

						tasks : [ 'emberTemplates', 'concat', 'less' ]
					}
				},

				emberTemplates : {
					options : {
						templateName : function(name) {
							return name.replace('App/templates/', '');
						}
					},
					compile : {
						options : {
							amd : false,
						},
						files : {
							"<%= config.path.webapp.root %>/js/emberTemplates.js" : "App/**/*.hbs"
						}
					}
				},

				concat : {
					dist : {
						src : [ 'App/js/*.js', 'App/models/*.js',
								'App/routes/*.js','App/objects/*.js','App/controllers/*.js','App/components/*.js', 'App/views/*.js' ],
						dest : '<%= config.path.webapp.root %>/js/app.min.js',
					},
				},

				"bower-install-simple" : {
					options : {
						color : true,
						directory : '<%= config.path.webapp.root %>/lib'
					},
					"prod" : {
						options : {
							production : true
						}
					},
					"dev" : {
						options : {
							production : false
						}
					}
				}
			});

	// Tarefas que serão executadas
	grunt.registerTask('default', [ 'emberTemplates', 'concat', 'less']);
	grunt.registerTask('w', [ 'watch' ]);
	grunt.registerTask('i', [  'bower-install-simple' ]);

};