console.log('wowow')
import Backbone from 'backbone';
import $ from 'jquery';
import playListTemplate from './playlist-template.js'
var forEach = function(arr, cb){
for(var i = 0 ; i < arr.length; i++){
  {cb(arr[i], i, arr)}
}
}
import {RadioModel, RadioCollection} from './modl-coll.js'



const AppRouter = Backbone.Router.extend({
	initialize: function(){
		Backbone.history.start()
	},

	routes:{
		'' : 'showHomePage',
		'playlist/:radioSelection': 'showRadio',
		'radio2': 'showRadio2'
	},

	showHomePage: function(){
		 console.log('i am home')
		 let appContainerEl = document.querySelector('#app-container')
			let myData = new RadioCollection("radio1")
			myData.fetch().then(function(serverRes){
				let introData = myData.models[0].attributes.introducing
				console.log(introData);
				function buildPageTemplate(introData){
					let introArr = introData
					let htmlTable = `
					<h3>${introArr.artist}:</h3>
					<h4>"${introArr.title}"</h4>
					<img src="${introArr.image}">
					`
					return htmlTable
				}
				appContainerEl.innerHTML = buildPageTemplate(introData[0])
			})
	},
	showRadio: function(radioSelection){
		let appContainerEl = document.querySelector('#app-container')
		let myData = new RadioCollection(radioSelection)
		myData.fetch().then(function(serverRes){
			let radioData1 = myData.models[0].attributes.a
			appContainerEl.innerHTML = playListTemplate(radioData1)
		})
	},
	// showRadio2: function(){
	// 	console.log('i am Radio 2');
	// 	let appContainerEl = document.querySelector('#app-container')
	// 	let myData = new RadioCollection("radio1")
	// 	myData.fetch().then(function(serverRes){
	// 		let radioData1 = myData.models[0].attributes.a
	// 		appContainerEl.innerHTML = playListTemplate(radioData1)
	// 	})
	// }
})

const app = new AppRouter()

 //$.getJSON('/proxy?api=http://www.bbc.co.uk/radio1/playlist.json').then(function(serverRes){
 //	console.log(serverRes)
 //})
