import { useState } from 'react';
import './API.css';

const API = () => {
  const [firstName, setFirstName] = useState('');
  const [qr, setQr] = useState('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Petyusya');

  const formSubmit = (event) => {
    event.preventDefault();
    setQr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${firstName}`);
    setFirstName('');
  };

  return (
    <div className="api">
      <div className="api__input">
              <h3 className="input__title">Vložte URL nebo text</h3>
        <form className="input__area" onSubmit={formSubmit}>
          <input
            type="text"
            placeholder="URL nebo text"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <button>Generovat QR kod</button>
        </form>
      </div>
      <div className="api__output">
        <img className="qr__img" src={qr} alt="" />
      </div>
    </div>
  );
};

export default API;
