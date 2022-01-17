import React from "react";


const Home =() =>{
    return(
        <div>
        <h1> Online  shopping </h1> <hr></hr>
  {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-50" src="../img/product-1.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="../img/product-2.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-50" src="../img/product-3.png" alt="Third slide"/>
    </div>
  </div>
</div> */}   

{/* <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-95" src="../img/banner-1.png" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../img/product-2.png" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../img/product-3.png" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */}

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../img/product-1.png" class="d-block" alt="..."/>
      </div>
     <div class="carousel-item">
        <img src="../img/product-2.png" class="d-block " alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="../img/product-3.png" class="d-block " alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</div> 

       
    )
};
export default Home;