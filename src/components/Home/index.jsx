import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const firstNameArray = [ '', 'M', 'a', 'r', 'i', 'e'];
    const lastNameArray = ['', 'G', 'a', 't', 's', 'c', 'h', 'i', 'n', 'é'];
    const jobArray = ['P', 'h', 'o', 't', 'o', 'g', 'r', 'a', 'p', 'h', 'e', 'r', '.'];

    /* useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
            }, 4000)
    }, []) */

    return (
        <>
           <div className="container home-page">
               
               <div className="text-zone">
                     <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>

                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={firstNameArray}
                        idx={15}
                        />
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={lastNameArray}
                        idx={15}
                        />
                        <br />
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                        />
                    </h1>
                     
               </div>
           </div>
        </>
    );
};

export default Home;