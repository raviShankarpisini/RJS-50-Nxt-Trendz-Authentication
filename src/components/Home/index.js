// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-bottom-container">
      <div className="text-container">
        <h1 className="text-heading hide-md">Clothes That Get YOU Noticed</h1>
        <p className="description ">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time.Cloths have always been a marker of the era we
          are in a revolution.Your fashion makes you been seen and heard that
          way you are.so,celebrate the seasons new and exciting fashion in your
          own way.
        </p>
        <button className="shop-now-button" type="button">
          Shop Now
        </button>
      </div>
      <div className="home-image">
        <h1 className="text-heading hide-lg">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="image"
        />
      </div>
    </div>
  </>
)

export default Home
