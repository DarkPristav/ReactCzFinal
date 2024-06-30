import './Exp.css'
import ExpDat from './ExpDat';
import Image1 from '../assets/portfolio1.jpg'
import Image2 from '../assets/portfolio2.jpg'
import Image3 from '../assets/portfolio3.jpg'
import Image4 from '../assets/portfolio4.jpg'
import Image5 from '../assets/portfolio5.png'

const Exp = () => {
  return <section className='exp'>
        <h2>My Experience</h2>
        <div className="experience__frontend">
          <h3>FrontEnd</h3>
          <div className="experience__content">
              <ExpDat title={'HTML'} info={'Expert '} img={Image1} />
              <ExpDat title={'CSS'} info={'Expert'} img={Image2}/>
              <ExpDat title={'JavaScript'} info={'Medium'} img={Image3}/>
              <ExpDat title={'Bootstrap'} info={'Small'} img={Image4}/>
              <ExpDat title={'React'} info={'God'} img={Image5}/>
          </div>
        </div>
    </section>
}

export default Exp