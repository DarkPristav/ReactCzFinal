import { useState } from "react"
import { PiListChecksDuotone } from "react-icons/pi";

const ExpDat = ( {title, info, img} ) => {
    const [show, setShow] = useState(false)
    
    return <article className='experience__detail'>
             <h4>{title}</h4>
                 <button onClick={ () => setShow(!show)}><PiListChecksDuotone className='experience__detail-icon'/></button>
        {show && <div>
            <p className='text-light'>{info}</p>
            <img className='exp__img' src={img} alt="Exp" />
        </div>}
            </article>
}

export default ExpDat