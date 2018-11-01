

var image = ["https://i1.wp.com/laserencore.com/wp-content/uploads/2017/02/edmlasers4.jpg?fit=930%2C532&ssl=1", "https://i0.wp.com/laserencore.com/wp-content/uploads/2017/02/indoorbeams.jpg?fit=930%2C523&ssl=1", "https://i2.wp.com/laserencore.com/wp-content/uploads/2017/02/waterscreen2.jpg?fit=930%2C932&ssl=1", "https://i2.wp.com/laserencore.com/wp-content/uploads/2017/02/schweitzerlasers.jpg?fit=930%2C621&ssl=1", "https://i1.wp.com/laserencore.com/wp-content/uploads/2017/02/laserbillboard.jpg?fit=663%2C997&ssl=1"];
var image2 = ["https://i2.wp.com/laserencore.com/wp-content/uploads/2017/02/laserguitar.jpg?w=306&h=306&crop=1&ssl=1", "https://i1.wp.com/laserencore.com/wp-content/uploads/2017/02/balloonfestlasers2.jpg?w=306&h=306&crop=1&ssl=1", "https://i0.wp.com/laserencore.com/wp-content/uploads/2017/02/balloonfestlasers1.jpg?w=306&h=306&crop=1&ssl=1", "https://i0.wp.com/laserencore.com/wp-content/uploads/2017/02/snowlasers.jpg?w=306&h=306&crop=1&ssl=1", "https://i2.wp.com/laserencore.com/wp-content/uploads/2017/02/lasereagle.jpg?w=306&h=306&crop=1&ssl=1", "https://i1.wp.com/laserencore.com/wp-content/uploads/2017/02/spaceneedlelasers.jpg?w=306&h=306&crop=1&ssl=1"];
//const imagePath = "./img/test/";


addImage();
addImage2();

var imageNumber = 0;
var imageModal = 0;

function addImage() {
    for (i = 0; i < image.length; i++) {
        $(".insertImagesHere").append(`<div id = "${image[i]}" class="imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${image[i]}" alt="${image[i]}"></a></div>`);
        var imageNumber = i;

    }

}

function addImage2() {
    for (i = 0; i < image2.length; i++) {
        $(".insertImagesHere2").append(`<div id = "${image2[i]}" class="imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${image2[i]}" alt="${image2[i]}"></a></div>`);
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
addFirstSpecialEventImage();
addSpecialEventImage();

function addFirstSpecialEventImage() {

    $(".specialEli").append(`<li data-target="#carousel-slider2" data-slide-to="0" class="active"></li>`);

    $(".specialE").append(`<div class="carousel-item active imageButton">
    <a href="#" class="image1" data-toggle="modal" data-target="#largeModal"></a>
      <a href="specialEvents.html" class="test btn btn-info" role="button">Image Gallery</a>
                      </div>`);

    $(".image1").append(`<img class="slider2 imageModal" src="${image[0]}" alt="${image[0]} style=" width:350px; height: 300px; " title="EDM Lasers">`);

}


    function addSpecialEventImage() {

    for (i = 1; i < image.length; i++) {

    $(".specialEli").append(`<li data-target="#carousel-slider2" data-slide-to="0" class="active"></li>`);

    $(".specialE").append(`<div class="carousel-item imageButton">
    <a href="#" class="image1" data-toggle="modal" data-target="#largeModal"><img class="slider2 imageModal" src="${image[i]}" alt="${image[i]} style=" width:350px; height: 300px; " title="EDM Lasers"></a>
      <a href="specialEvents.html" class="test btn btn-info" role="button">Image Gallery</a>
                      </div>`);

        $(".specialEli").append(`<li data-target="#carousel-slider2" data-slide-to="${[i]}" class="active"></li>`);



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
    $("#myModalLabel").append(`<h4 id="myModalLabel" class="modal-title" >Image Gallery</h4>`);
});



// special events end


//Fairs and Festivals start

//const imagePath = "./img/test/";
addFirstFairFestivalImage();
addFairFestivalImage();

//var image = ["dixie.jpg", "dixie on a bird.jpg", "food turkey 068.JPG", "skiing.jpg", "SnarlingWolf.jpg"];
//const imagePath = "./img/test/";

function addFirstFairFestivalImage() {

    $(".insertLi").append(`<li data-target="#carousel-slider3" data-slide-to="0" class="active"></li>`);

    $(".specialFF").append(`<div class="carousel-item active imageButton">
    <a href="#" class="imageFF" data-toggle="modal" data-target="#largeModal"></a>
      <a href="fairsAndFestivals.html" class="btn btn-info" role="button">Image Gallery</a>
                      </div>`);

    $(".imageFF").append(`<img class="slider3 imageModal" src="${image2[0]}" alt="${image2[0]} style=" width:100%; height: 300px; " title="EDM Lasers">`);

}


function addFairFestivalImage() {

    for (i = 1; i < image2.length; i++) {

        $(".specialFF").append(`<div class="carousel-item imageButton">
    <a href="#" class="imageFF" data-toggle="modal" data-target="#largeModal"><img class="slider3 imageModal" src="${image2[i]}" alt="${image2[i]} style=" width:100%; height: 300px; " title="EDM Lasers"></a>
      <a href="fairsAndFestivals.html" class="btn btn-info" role="button">Image Gallery</a>
                      </div>`);

        $(".insertLi").append(`<li data-target="#carousel-slider3" data-slide-to="${[i]}" class="active"></li>`);


        //var imageNumber = i;

    }

}





// Fairs and Festivals end







