import HeroImg from "../assets/image/hero/unsplash-hero.jpg";
const Hero = () => {
  return(
    <>
      <div className="container mx-auto px-3">
        <img src={HeroImg} alt="Hero banner"/>
      </div>
    </>
  );
}

export { Hero };