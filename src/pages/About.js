import { useRef } from 'react';
import './About.css';
import data from '../components/AboutData';

const About = () => {
  const refParagraph = useRef(null);

  const differentChangesOne = () => {
    refParagraph.current.textContent = data[0].info;
  };

  const differentChangesTwo = () => {
    refParagraph.current.textContent = data[1].info;
  };

  const differentChangesTree = () => {
    refParagraph.current.textContent = data[2].info;
  };
  const differentChangesFour = () => {
    refParagraph.current.textContent = data[3].info;
  };
  return <section className='about'>
      <div className="buttons-area">
        <button onClick={differentChangesOne}>{data[0].title}</button>
        <button onClick={differentChangesTwo}>{data[1].title}</button>
        <button onClick={differentChangesTree}>{data[2].title}</button>
        <button onClick={differentChangesFour}>{data[3].title}</button>
      </div>
      <div className='about__desc'><div>
      <p ref={refParagraph} className='about__p'>
        {' '}
        !!!Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur perferendis nobis
        repudiandae quos. Doloribus fugit, quae rerum perspiciatis cumque voluptate enim voluptatum
        veniam provident cupiditate placeat magnam id est culpa.
      </p>
      </div>
      </div>
    </section>
};

export default About;
