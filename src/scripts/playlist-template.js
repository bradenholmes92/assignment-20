import Backbone from 'backbone';



// function buildPageTemplate(radioData1){
//   let radioOneObj = radioData1
//   let htmlTable = `
//
//   `
//   forEach(radioOneObj, function(radioOneElement, index, theArray){
//     let radioArtist = radioOneElement.artist
//     console.log(radioArtist)
//   })
//
//
//   return htmlTable
// }
const playListTemplate = function(playlistItems){
  var htmlString = ``

  playlistItems.forEach(function(obj, index, array){
    let radioImage = obj.image
    let radioArtist = obj.artist
    let radioSong = obj.title
    let radioInfo = obj.artist_id

    let radioLayOut = `
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <div class="thumbnail">
          <img src="${radioImage}">
          <div class="caption">
            <h1>${radioArtist}</h1>
            <h3>"${radioSong}"</h3>
            <p>${radioInfo}</p>
          </div>
        </div>
      </div>
    </div>
    `
    htmlString += radioLayOut
  })


  return htmlString
}


export default playListTemplate;
