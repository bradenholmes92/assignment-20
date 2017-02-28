import Backbone from 'backbone';

export const RadioModel = Backbone.Model.extend({

})

export const RadioCollection = Backbone.Collection.extend({
  url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',
  initialize: function(qryParams){
    console.log('query paramater', qryParams)
    this.url = "/proxy?api=http://www.bbc.co.uk/" + qryParams + "/playlist.json"
  },
  parse: function(serverRes){
    return serverRes.playlist
  },
  Model: RadioModel
})
