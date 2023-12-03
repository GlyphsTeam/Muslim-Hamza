import style from "../../../assets/style/HomePage/hero.module.scss";
import HeroNavigation from "./HeroNavigation";
function Hero({stateName}) {
  return (
    <div className={style.heroDiv}>
      <div>
        <div className={style.descriptionDiv}>
          {" "}
          <h3>GA Muslim {stateName}</h3>
          <p>Cast Aluminum Outdoor Chaise Lounge As an elegant </p>
        </div>

        <HeroNavigation />
      </div>
    </div>
  );
}

export default Hero;
