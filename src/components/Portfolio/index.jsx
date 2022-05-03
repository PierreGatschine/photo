import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

     useEffect(() => {
        return setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container portfolio-page'>
                <div className="img-zone-left">
                    <img src={require('../../assets/images/menFugi-unsplash.jpeg')} alt="portrait" />
                </div>
                <div className="text-zone">
                    
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'o', 'r', 't', 'f', 'o ', 'l', 'i', 'o']}
                            idx={15}
                            />
                    </h1>
                </div>
                <div className="img-zone-right">
                    <div className="container">
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
                    </div>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    );
};

export default Portfolio;