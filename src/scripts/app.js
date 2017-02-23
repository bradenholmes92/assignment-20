console.log('wowow')
import Backbone from 'backbone';
import $ from 'jquery';

$.getJSON('/proxy?api=http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
	console.log(serverRes)
})

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
		console.log('app is routing!')
	},
	
})
