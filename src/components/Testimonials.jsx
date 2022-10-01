import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import '../scss/components/_testimonials.scss';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Luk from '../assets/testimonial_luk.png';
import Santi from '../assets/testimonial_santi.png';
import Niqui from '../assets/testimonial_niqui.png';
import Lucp from '../assets/testimonial_lucperrone.jpg';


const Testimonials = () => {
  return (
    <div name='testimonials' className='testimonial-section'>
        {/* Container */}
        <div className='testimonial-container'>
            <div>
                <p className='testimonial-title'>Testimonials</p>
                <p className='testimonial-description'>What people say</p>
            </div>

            <div className='testimonial-list-container'>
                <Swiper spaceBetween={30} pagination={{clickable: true,}} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide className="testimonial-card">
                        <img src={Luk} alt="Lucas Neme" className="testimonial-img" />

                        <h3 class="testimonial_name">Lucas Neme</h3>
                        <p class="testimonial_description rol">Director Audiovisual</p>
                        <p class="testimonial_description">
                            Desde el día 1 su predisposición fue intachable, siempre atento y abierto a escuchar y aprender, además de ser muy proactivo.
                            Siempre puntual, no faltó nunca a la agencia y no se iba hasta que no terminaba las tareas del día.
                            También algo a destacar es que al tener una cabeza más técnica a la hora de resolver cosas, me enseñó herramientas que hasta ese momento no conocía. 
                            Fue siempre un buen compañero, anteponiendo al otro antes que a él.
                        </p>
                    </SwiperSlide>

                    <SwiperSlide className="testimonial-card">
                        <img src={Santi} alt="Santiago Gutierrez Quinzan" className="testimonial-img" />

                        <h3 class="testimonial_name">Santiago Gutierrez Quinzan</h3>
                        <p class="testimonial_description rol">Diseñador UX/UI</p>
                        <p class="testimonial_description">
                            Juan es una persona EXCELENTE para trabajar. Muy atento, agradable y activo en el trabajo de equipo.
                            Es una persona que te genera gusto ir a trabajar en grandes proyectos con su compañía.
                            Una gran persona! 
                        </p>
                    </SwiperSlide>

                    <SwiperSlide className="testimonial-card">
                        <img src={Niqui} alt="Nicole Berns" className="testimonial-img" />

                        <h3 class="testimonial_name">Nicole Berns</h3>
                        <p class="testimonial_description rol">Directora de Cultura | Municipalidad Tres de Febrero</p>
                        <p class="testimonial_description">
                            Juan Cruz tiene una gran capacidad de liderazgo gracias a su personalidad conciliadora y tranquila. 
                            Es muy trabajador y ejecuta muy bien bajo presión, sin perder su capacidad de transmitir serenidad a quienes lo rodean. 
                            Se ha especializado en un perfil de diseñador multimedia que desarrolla con gran expertise. 
                        </p>
                    </SwiperSlide>

                    <SwiperSlide className="testimonial-card">
                        <img src={Lucp} alt="Lucas Perrone" className="testimonial-img" />

                        <h3 class="testimonial_name">Lucas Perrone</h3>
                        <p class="testimonial_description rol">Agencia Sangre</p>
                        <p class="testimonial_description">
                            Contactamos a Juan para un proyecto con nuestra agencia, y su aporte fue excelente. 
                            Siempre atento y con muy buena actitud para cada idea que desarrollamos, una predisposición 
                            de 10 y siempre con fluidez a la hora de hacer entregas y proponer ideas. 
                        </p>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;