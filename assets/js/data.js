
key="45981947-a00cdb5da8569912863f50b92"
url="https://pixabay.com/api/videos/?key="+key+"&q="


function getVideos(e){
  e.preventDefault()
  var q=$('#q').val()
  $('#videosresult').empty()
iurl=url+q;
$.getJSON( iurl, function( data ) {
videosdata=data.hits;
result='';
$.each( videosdata, function( key,val ) {
  result+=`<div class='col-md-4 mb-3'>
      <video src='${val.videos.large.url}' controls class='card-img-top'  title='${val.tags}' height=350px></video>
     </div>
`;
});
$('#videosresult').append(result);  
})


}


