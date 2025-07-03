import { Link } from "react-router-dom"

const NavBar = ({ cartItem, isAuthenticated, setUserLogout }) => {
    
    return <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
        <Link className="navbar-brand" to="/">My Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart <span className="badge pill bg-secondary">{ cartItem.length }</span></Link>
            </li>

            {
              isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link to="/my-account" className="nav-link">My Account</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/my-orders" className="nav-link">My Orders</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={ setUserLogout }>Logout</Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login/Signup</Link>
                </li>
              ) 
            }
          </ul>
        </div>
      </nav>
    </>
}

export default NavBar
