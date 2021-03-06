import React, { /* useEffect, */ useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../components/AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss';

const Home = () => {
    const [letterClass, /* setLetterClass */] = useState('text-animate')
    const firstNameArray = [ '', 'M', 'a', 'r', 'i', 'e'];
    const lastNameArray = ['', 'M', 'a', 'r', 't', 'i', 'n'];
    const jobArray = ['P', 'h', 'o', 't', 'o', 'g', 'r', 'a', 'p', 'h', 'e', 'r', '.'];

   /*  useEffect(() => {
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

                    <h2>
                        Portrait / Mariage / Maison <br/>
                        Photo / Video / Drone
                    </h2>

                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                     
               </div>
           </div>
           <Loader type="ball-scale-ripple-multiple" />
        </>
    );
};

export default Home;