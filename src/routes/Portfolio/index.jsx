import React, {/*  useEffect , */ useState } from 'react';
import CategoryItem from '../../components/CategoryItem'
import AnimatedLetters from '../../components/AnimatedLetters';
import Loader from 'react-loaders';
import './index.scss'

// Galerie
import Portrait from '../../assets/images/portrait.jpeg';
import Mariage from '../../assets/images/mariage.jpeg';
import Event from '../../assets/images/event.jpeg';
import Camera from '../../assets/images/camera.jpeg';
import Drone from '../../assets/images/drone.jpeg';


const Portfolio = () => {
    const [letterClass, /* setLetterClass */] = useState('text-animate');

    const categories = [
        {
            id: '1',
            title: 'Portrait',
            imageUrl: Portrait
        },
        {
            id: '2',
            title: 'Mariage',
            imageUrl: Mariage
        },
        {
            id: '3',
            title: 'Évènement',
            imageUrl: Event
        },
        {
            id: '4',
            title: 'Photo',
            imageUrl: Camera
        },
        {
            id: '5',
            title: 'Drone',
            imageUrl: Drone
        },
    ]

    /*  useEffect(() => {
        return setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, []) */

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
                    <div className="portfolio-container">
                        {categories.map((category) => (
                            <CategoryItem key={category.id} category={category} />
                        ))}
                    </div>
                </div>
            </div>
            <Loader type="ball-scale-ripple-multiple" />
        </>
    );
};

export default Portfolio;

{/* <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" />
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
                        <img src={require('../../assets/images/skateMan-unsplash.jpeg')} alt="portrait" /> */}