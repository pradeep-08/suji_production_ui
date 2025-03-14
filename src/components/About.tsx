import about2 from "../img/About/About2.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet";



export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
   
      <div data-aos="slide-right" id="about" className="  pt-24">
      <Helmet>
        <title>About Us - Suji Hair & Makeup</title>
        <meta name="description" content="Learn more about Suji Hair & Makeup. We provide top-tier bridal makeup, hair styling, and saree draping services." />
        <meta property="og:title" content="About Us - Suji Hair & Makeup" />
        <meta property="og:description" content="Get to know Suji Hair & Makeup – your go-to professional for bridal beauty and event styling." />
        <meta property="og:image" content="https://www.sujihairandmakeup.com/assets/about.png" />
        <meta property="og:url" content="https://sujihairandmakeup.com/about" />
        <link rel="canonical" href="https://sujihairandmakeup.com/about" />
      </Helmet>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 d-grid">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About</h1>
          </div>
          <section className="pt-10 overflow-hidden  md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="grid items-center grid-cols-1 md:grid-cols-2">
                <div>
                  <h1 className="text-3xl font-bold leading-tight text-black  sm:text-5xl lg:text-3xl">
                    <br className="block sm:hidden" />
                    Suji Hair and Makeup
                  </h1>
                  <p
                    data-aos="fade-down"
                    className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600  md:mt-8"
                  >
                    offers a range of services to enhance your natural beauty
                    for any occasion. From basic to HD, matte, and dewy makeup,
                    we cater to all needs including engagement, reception, and
                    pre-wedding looks. Whether it’s party makeup, bridal makeup,
                    or special events like baby showers and puberty ceremonies,
                    our expert team ensures you look stunning and radiant. Let
                    us help you shine on your special day !!!
                  </p>
                </div>
                <div className="relative">
                  <img
                    src={about2}
                    className="rounded-xl transition-transform duration-300 transform "
                    alt="Imagem de perfil"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
