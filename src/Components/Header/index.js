import styled from "styled-components";
import logo from "./logo/logo.jpg";

function Header() {
  return (
    <HeaderPane>
      <Logo src={logo} alt="logo" />
      <Service>
        <li>
          <a href=".">Products</a>
        </li>
        <li>
          <a href=".">Features</a>
        </li>
        <li>
          <a href=".">Marketplace</a>
        </li>
        <li>
          <a href=".">Pricing</a>
        </li>
        <li>
          <a href=".">Partners</a>
        </li>
      </Service>
      <Status>
        <button>Login</button>
        <button>Sign up</button>
        <button>Contact Sales</button>
      </Status>
    </HeaderPane>
  );
}

export default Header;

const HeaderPane = styled.div`
  // Css cho cả Header

  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 20px;
`;
const Logo = styled.img`
  // CSS cho Logo
  width: 100px;
  height: 6vh;
  border-radius: 50%;
  margin-left: 20px;
`;
const Service = styled.div`
  // CSS cho service trên Header
  display: flex;
  align-items: center;
  margin-left: auto;

  li {
    list-style: none;
  }

  li a {
    position: relative;
    display: block;
    height: 6vh;
    line-height: 6vh;
    padding: 0 15px;
    box-sizing: border-box;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
  }

  li a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform-origin: right;
    z-index: -1;
    transform: scaleX(0);
    transition: transform 0.5s;
  }

  li a:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }

  li a:hover {
    color: #262626;
  }
`;
const Status = styled.div`
  // CSS cho Status ( Login, Sign up,..) trên Header
  display: flex;
  align-items: center;

  button {
    display: block;
    height: 6vh;
    line-height: 6vh;
    padding: 0 15px;
    box-sizing: border-box;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    background: transparent;
    border: none;
    border: 1px solid #fff;
  }

  button:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;
