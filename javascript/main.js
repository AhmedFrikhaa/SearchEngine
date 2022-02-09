document.querySelector(".js-go").addEventListener('click',function(){
var input =document.querySelector("input").value;

getInput(input);

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){
var input =document.querySelector("input").value;
//13 is the key code of "enter"
if (e.which===13){
getInput(input);
}
});
//connect api with search bar
function getInput(item){
	var query=item.split(' ').join('+');
	var url="https://api.giphy.com/v1/gifs/search?q="+ query + "&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h";

//data stuff we grap data from gify and try to show gifs on the body of our site web
// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open('GET', url );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){
var data=e.target.response;
pushToDOM(data);
});
}
// fonction pushToDOM affiche le resultat dans le BODY
function pushToDOM(input){
	 var response=JSON.parse(input);
	 var container=document.querySelector(".js-container");
     var result=document.querySelector(".results");
     clear(container);
     clear(result);
	 var imagesUrls=response.data;
     imagesUrls.forEach(function(image){
     var src=image.images.fixed_height.url;
     result.innerHTML=src.length+"gifs found";
     container.innerHTML+="<img src=\""+src+"\" class=\"container-image\">";
 });
}

function clear(item){
	item.innerHTML="";
}

