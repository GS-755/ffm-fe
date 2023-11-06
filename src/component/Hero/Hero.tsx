import { Carousel, initTE } from "tw-elements";
initTE({ Carousel });
import HeroImg from "../../assets/image/hero/unsplash-hero.jpg";
import HeroImg2 from "../../assets/image/hero/unsplash-hero-2.jpg";


const Hero = () => {
  return (
    <>
      <div id="carousel">
        <div id="Banner" className="carousel slide carousel-fade text-lg-center" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#Banner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#Banner" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div id="Banner" className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={HeroImg} className="d-block w-100 h-450" alt="..." />
            </div>
            <div id="Banner" className="carousel-item" data-bs-interval="3000">
              <img src={HeroImg2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#Banner" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#Banner" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export { Hero };