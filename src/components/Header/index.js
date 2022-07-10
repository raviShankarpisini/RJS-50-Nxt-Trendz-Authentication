// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const NavBarInLg = () => (
  <div className="header-container-in-lg">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="nav-image"
    />
    <div className="nav-text-container">
      <ul>
        <li>
          <Link to="/" className="link-style">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="link-style">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="link-style">
            Cart
          </Link>
        </li>
      </ul>
      <button className="exit-button" type="button">
        Logout
      </button>
    </div>
  </div>
)

const NavInSm = () => (
  <div className="header-container-in-sm">
    <div className="nav-logo-exit-container">
      <div className="nav-image-sm">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="image-sm"
        />
      </div>

      <button className="sm-exit-button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="icon"
        />
      </button>
    </div>
    <div>
      <ul>
        <li>
          <Link to="/home">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/products">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="icon"
            />
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

const Header = () => (
  <nav>
    <NavBarInLg />
    <NavInSm />
  </nav>
)

export default Header
