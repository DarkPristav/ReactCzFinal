import { useRef } from 'react';
import './About.css';
import data from '../AboutData';

const About = () => {
  const refParagraph = useRef(null);

  const differentChange = (index) => {
    refParagraph.current.textContent = data[index].info;
  }

  return (
    <section className="about">
      <div className="buttons-area">
         {
          data.map((oneIndex, index) => {
          return <button onClick={ () => differentChange(index) }>
      {oneIndex.title}
    </button>
          })
  
    }
      </div>
      <div className="about__desc">
        <div>
          <p ref={refParagraph} className="about__p">
            {' '}
            Click the button!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
