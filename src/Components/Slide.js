
import { useEffect, useRef, useState } from 'react';
import styles from './Slide.module.css'

const Slide = ({slides}) =>{

    //vericar qual slide tá ativo
    const [active, setActive] = useState(0);

    //position animação slide
    const [position, setPosition] = useState(0);

    const contentRef =useRef();

    useEffect(() =>{
        //width do content
        const {width} = contentRef.current.getBoundingClientRect();
        setPosition(-(width* active ))
    },[active])

    function slidePrev(){
        if (active > 0){
            setActive(active - 1)
        }
    }

    function slideNext(){
        if(active < slides.length-1)
        setActive(active + 1)
    }


    return(
        <section className={styles.container}>
            <div ref={contentRef} className={styles.content} style={{transform:`translateX(${position}px)`}}>
                {slides.map((slide)=><div key={slide.id} className={styles.item}>
                    {slide.text}

                </div>)}
            </div>

            <div className={styles.nav}>
                <button onClick={slidePrev}>Voltar</button>
                <button onClick={slideNext}>Próximo</button>
            </div>
            
        </section>
    )
}


export default Slide;