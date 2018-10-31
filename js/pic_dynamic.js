

var image = ["https://i1.wp.com/laserencore.com/wp-content/uploads/2017/02/edmlasers4.jpg?fit=930%2C532&ssl=1", "https://i0.wp.com/laserencore.com/wp-content/uploads/2017/02/indoorbeams.jpg?fit=930%2C523&ssl=1", "https://i2.wp.com/laserencore.com/wp-content/uploads/2017/02/waterscreen2.jpg?fit=930%2C932&ssl=1", "https://i2.wp.com/laserencore.com/wp-content/uploads/2017/02/schweitzerlasers.jpg?fit=930%2C621&ssl=1", "https://i1.wp.com/laserencore.com/wp-content/uploads/2017/02/laserbillboard.jpg?fit=663%2C997&ssl=1"];
//const imagePath = "./img/test/";
addImage();
var imageNumber = 0;
var imageModal = 0;
function addImage() {
    for (i = 0; i < image.length; i++) {

        $(".insertImagesHere").append(`<div id = "${image[i]}" class="imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${image[i]}" alt="${image[i]}"></a></div>`);
        var imageNumber = i;

    }

}

const newLocal = ".imageStyle";

$(newLocal).on("click", function () {
    $(".insertImagesModal").empty();
    $("#myModalLabel").empty();

    var imageModal = $(this).attr('src');
    var imageModalName = imageModal.substr(11).slice(0, -4);
    $(".insertImagesModal").append(`<img class="modalImageStyle"src= "${imageModal}" alt="${imageModal}">`);
    $("#myModalLabel").append(`<h4 id="myModalLabel" class="modal-title" >${imageModalName}</h4>`);
});



//special events start



//var image = ["dixie.jpg", "dixie on a bird.jpg", "food turkey 068.JPG", "skiing.jpg", "SnarlingWolf.jpg"];
//const imagePath = "./img/test/";
addFirstSpecialEventImage()
addSpecialEventImage();
//var imageNumber = 0;
//var imageModal = 0;
function addFirstSpecialEventImage() {

    $(".specialE").append(`<div class="carousel-item active imageButton">
    <a href="#" class="image1" data-toggle="modal" data-target="#largeModal"></a>
      <a href="specialEvents.html" class="btn btn-info" role="button">EDM Lasers</a>
                      </div>`);

    $(".image1").append(`<img class="slider2 imageModal" src="${image[0]}" alt="${image[0]} style=" width:350px; height: 300px; " title="EDM Lasers">`);

}


    function addSpecialEventImage() {

    for (i = 1; i < image.length; i++) {

    $(".specialE").append(`<div class="carousel-item imageButton">
    <a href="#" class="image1" data-toggle="modal" data-target="#largeModal"><img class="slider2 imageModal" src="${image[i]}" alt="${image[i]} style=" width:350px; height: 300px; " title="EDM Lasers"></a>
      <a href="specialEvents.html" class="btn btn-info" role="button">EDM Lasers</a>
                      </div>`);

    //$(".image1").append(`<img class="slider2 imageModal" src="${image[i]}" alt="${image[i]} style=" width:350px; height: 300px; " title="EDM Lasers">`);


        //var imageNumber = i;

    }

}

const modalOne = ".imageModal";

$(modalOne).on("click", function () {
    $(".insertImagesModal").empty();
    $("#myModalLabel").empty();

    var imageModal = $(this).attr('src');
    console.log(imageModal);
    var imageModalName = imageModal.substr(11).slice(0, -4);
    $(".insertImagesModal").append(`<img class="modalImageStyle"src= "${imageModal}" alt="${imageModal}">`);
    $("#myModalLabel").append(`<h4 id="myModalLabel" class="modal-title" >EDM Lasers</h4>`);
});



// special events end
