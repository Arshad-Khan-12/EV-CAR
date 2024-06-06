import "./Hero.css";
import arrow from "../../assets/arrow_btn.png";
import pause from "../../assets/pause_icon.png";
import play from "../../assets/play_icon.png";

const Hero = ({
  setHeroCount,
  heroCount,
  heroData,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div>
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="explore">
        <p>Explore the features</p>
        <img src={arrow} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause : play}
            alt=""
          />
          <p>Watch the Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
