import Me from '../assets/header.jpg';
import './Header.css';

const Header = () => {
  const textColor = ['black', 'green', 'yellow', 'grey', 'blue', 'fuchsia'];
  const randomColor = textColor[Math.floor(Math.random() * textColor.length)];
  const randomColorTitle = textColor[Math.floor(Math.random() * textColor.length)];

  return (
    <header>
      <div className="header__container">
        <div className="header__me">
          <img src={Me} alt="Me" />
        </div>
        <h5>Hello I am</h5>
        <h1 className="header__title" style={{ color: randomColorTitle }}>
          Petro Atamaniuk
        </h1>
        <h5 className="header__light" style={{ color: randomColor }}>
          FrontEnd Developer
        </h5>
      </div>
    </header>
  );
};

export default Header;
