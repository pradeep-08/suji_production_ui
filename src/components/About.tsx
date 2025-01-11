import about2 from '../img/About/About2.jpeg'
import { useEffect } from "react";
import AOS from 'aos';




export default function About() {
      useEffect(() => {
          AOS.init({ duration: 2000 });
        }, []);
    return (
        <div data-aos="slide-left" id="about" className="  pt-24">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 d-grid">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">About</h2>
                </div>
                <section className="pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid items-center grid-cols-1 md:grid-cols-2">

                            <div>
                                <h1 className="text-3xl font-bold leading-tight text-black  sm:text-5xl lg:text-3xl">
                                    <br className="block sm:hidden" />Suji Hair and Makeup
                                </h1>
                                <p  data-aos="fade-down" className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8">
                                    offers a range of services to enhance your natural beauty for any
                                    occasion. From basic to HD, matte, and dewy makeup, we cater to all needs including engagement,
                                    reception, and pre-wedding looks. Whether it’s party makeup, bridal makeup, or special events like
                                    baby showers and puberty ceremonies, our expert team ensures you look stunning and radiant. Let us
                                    help you shine on your special day !!!
                                </p>

                            </div>
                            <div className="relative">
                            <img src={about2} className="rounded-xl transition-transform duration-300 transform " alt="Imagem de perfil" />
                            {/* <img src={about2} className="rounded-xl absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100" alt="Nova imagem" /> */}
                                {/* <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-xl hover:b" src={about1}alt="about1" /> */}
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>


    );
}