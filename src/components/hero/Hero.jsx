import c from "./Hero.module.css";
import { useMobile } from "../../utils/hooks";

const Hero = () => {
  const isMobile = useMobile();

  return (
    <section className={c.hero}>
      <div className="container">
        <h1 className={c.title}>Congratulations!</h1>
        <p className={c.text}>
          The "Mysterious Sephora Box" contest has started. You have been
          selected to try new products from well-known brands. For only 65 MXN,
          you will receive a box full of products that will soon be available in
          Sephora stores. Limit: one box per customer.
        </p>
      </div>

      <img
        src={isMobile ? "/img/promoImage.png" : "/img/promoImage-deck.png"}
        alt="Promolmage"
      />
      <div className="small-container">
        <p className={c.lastText}>
          To receive your Sephora Box, complete the form to confirm that you are
          a real person.
        </p>
        <p className={c.lastText}>Hurry up, the number of prizes is limited!</p>
      </div>
    </section>
  );
};

export default Hero;
