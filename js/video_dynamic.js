

var video = ["Laserencore DemoReel.mp4"];

const imagePath = "./videos/";


addVideo();


    
       
       
        

function addVideo() {
    for (i = 0; i < video.length; i++) {
        $(".insertVideoHere").append(`<video width="640" height="480" controls><source src="${imagePath}${video[i]}" type="video/mp4"><source src="movie.ogg" type="video/ogg"> Your browser does not support the video tag.</video>`);
        var imageNumber = i;

    }

}






