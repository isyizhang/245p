import ramen from "../../image/ramen.jpg";
import restaurant from "../../image/restaurant.jpg";
import sukiyaki from "../../image/sukiyaki.jpg";
import sushi from "../../image/sushi.jpg";

const HOME_PAGE_CONTENT = (
  <>
    <h3>Enjoy the most authentic Japanese cuisine in Irvine</h3>
    <div className="images-container">
      <img id="ramen" src={ramen} alt="ramen" />
      <img id="sukiyaki" src={sukiyaki} alt="sukiyaki" />
      <img id="sushi" src={sushi} alt="sushi" />
    </div>
    <p>At Sakura Japanese Cuisine, we use premium ingredients to make the best meal for you.</p>
  </>
);

const ABOUT_PAGE_CONTENT = (
  <>
    <h3>About Us</h3>
    <p>Sakura Japanese Cuisine is a Japanese food-service business specializing in ramen, sushi and other traditional Japanese dishes. The restaurant was founded by Hirokazu Koreeda from Fukuoka, Japan. It began in 1980 as a ramen stall named "Futaba Ramen" (屋台双葉ラーメン) in Los Angeles. It was later renamed "Sakura"（"桜" cherry blossom）in 1996. After three decades of serving, it moved to Irvine.</p>
    <div className="images-container">
      <img id="restaurant" src={restaurant} alt="restaurant" />
    </div>
  </>
);

const MAIN_DATA = [
  { content: HOME_PAGE_CONTENT },
  { content: ABOUT_PAGE_CONTENT },
];

export { MAIN_DATA };
