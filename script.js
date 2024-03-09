let imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photoArray = [];
let apiKey = 'YoeaJihLi7z13l6sXkRlnP7GxxU2X1HblmPP9BQHPLw';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=10`;
function setattributes(element,attributes){
    for(const key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}

function displayPhoto(){
    photoArray.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', "_blank");
    const img = document.createElement("img");
    img.setAttribute('src',photo.urls.regular);
    img.setAttribute('alt', photo.alt_description);
    img.setAttribute('title', photo.alt_description);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}




async function getPhotes(){
    try {
        let response = await fetch(apiUrl);
        photoArray = await response.json();
        
        displayPhoto();
    } catch (error) {
        console.log("Whoops this an is error",error);
        
    }

}

// scroll when it near to page
window.addEventListener('scroll',() => {
    if(window.innerHeight+scrollY >= document.body.offsetHeight-1000){
        getPhotes();
        console.log('load photos');

    }

});
getPhotes();


//         let response = await fetch(`https://api.unsplash.com/photos/random/?client_id=YoeaJihLi7z13l6sXkRlnP7GxxU2X1HblmPP9BQHPLw&count=10`);
