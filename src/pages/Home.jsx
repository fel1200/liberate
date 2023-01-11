import React from 'react'
import '../styles/Home.scss';

import heroImage from '../assets/images/heroImage.png'
import sponsor1 from '../assets/images/sponsor1.svg'
import sponsor2 from '../assets/images/sponsor2.svg'
import sponsor3 from '../assets/images/sponsor3.svg'
import sponsor4 from '../assets/images/sponsor4.svg'
import sponsor5 from '../assets/images/sponsor5.svg'
import profile1 from '../assets/images/profile1.png'
import profile2 from '../assets/images/profile2.png'
import profile3 from '../assets/images/profile3.png'

const Home = () => {
    return(
        <>
            <div className='main'>
                <div className='hero'>
                    <div className='heroText'>
                        <h1>Actívate y libérate de la mala salud </h1>
                        <p>Imagina una vida en donde puedas disfrutar
                             a plenitud a través de la activación física. 
                             Cientos de actividades que puedes hacer
                             en tu casa, en el parque o en tu trabajo para sentirte mejor </p>
                        <div className='buttonsHeroText'>
                            <button className='buttonActivity'>Actividades</button>
                            <button className='buttonProfile'>Crear perfil</button>
                        </div>
                    </div>
                    <img src={heroImage} alt="heroImage" />
                </div>
                <div className="elipse2">
                </div>
                <div className='sponsors'>
                    <div className='sponsorsText'>
                        <p>PATROCINADORES</p>
                    </div>
                    
                    <div className='sponsorContainer'>
                        <div className="sponsorsLogos">
                            <img src={sponsor1} alt="sponsor1" />
                            <img src={sponsor2} alt="sponsor1" />
                            <img src={sponsor3} alt="sponsor1" />
                            <img src={sponsor4} alt="sponsor1" />
                            <img src={sponsor5} alt="sponsor1" />
                        </div>
                    </div>
                </div>
                <div className='testimonials'>
                    <div className='testimonialsText'>
                        <p>Testimonios</p>
                    </div>
                    <div className='testimonialsCards'>
                        <div className='card'>
                            <div className='cardImage'>
                                <img src={profile1} alt='profile1'></img>
                            </div>
                            <div className='cardText'>
                                <p className='cardTextName'>Alejandra Rivas</p>
                                <p className='cardTextTestimonial'>Con solo 10 minutos en el día
                                 me he sentido con más energía y ganas para mi día a día</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='cardImage'>
                                <img src={profile2} alt='profile2'></img>
                            </div>
                            <div className='cardText'>
                                <p className='cardTextName'>Andrea Juárez</p>
                                <p className='cardTextTestimonial'>Me encanta bailar y no sabía
                                 que era un excelente ejercicio, escuchar la música y bailar un 
                                 rato me hacen sentir más feliz</p>
                            </div>
                        </div>
                        <div className='card'>
                            <div className='cardImage'>
                                <img src={profile3} alt='profile3'></img>
                            </div>
                            <div className='cardText'>
                                <p className='cardTextName'>María Camacho</p>
                                <p className='cardTextTestimonial'>Tengo unos perritos y caminando
                                 y corriendo nos ponemos en forma y nos divertimos</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='callToAction'>
                    <p></p>
                </div>
                <div className='footer'>
                    
                </div>

            </div>
        </>
    )
};

export {Home};