import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { Slide } from 'react-slideshow-image';
import ReactPlayer from 'react-player/youtube';
import Carousel from 'react-multi-carousel';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-multi-carousel/lib/styles.css';
import 'react-slideshow-image/dist/styles.css';
import './components/styles/index.css';
import './index.css';

// Images
import image1 from './assets/img/slide_1.png';
import image2 from './assets/img/slide_2.jpg';
import image3 from './assets/img/slide_3.jpg';
import image4 from './assets/img/slide_4.jpg';
import aboutus from './assets/img/aboutus.jpg';
import location from './assets/img/location.jpeg';
import place from './assets/img/place.PNG';

import aut_1 from './assets/img/img_asha.jpg';
import aut_2 from './assets/img/img_jouf.jpg';
import aut_3 from './assets/img/img_al.jpeg';
import aut_4 from './assets/img/img_1.jpeg';
import aut_5 from './assets/img/img_2.jpg';
import aut_6 from './assets/img/img_3.jpg';
import aut_7 from './assets/img/img_4.jpg';
import aut_8 from './assets/img/img_5.jpg';
import aut_9 from './assets/img/img_6.jpg';
import aut_10 from './assets/img/img_7.jpg';
import aut_11 from './assets/img/img_8.jpg';
import aut_12 from './assets/img/img_9.png';
import aut_13 from './assets/img/img_10.jpg';
import aut_14 from './assets/img/img_11.jpeg';
import aut_15 from './assets/img/img_12.jpg';
import aut_16 from './assets/img/img_13.png';
import aut_17 from './assets/img/img_14.jpeg';
import aut_18 from './assets/img/img_15.jpg';
import aut_19 from './assets/img/img_16.jpg';
import aut_20 from './assets/img/img_17.jpg';
import aut_21 from './assets/img/img_18.jpg';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tabs from './components/Tabs';

const slideImages = [image1, image2, image3, image4];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

function App() {
  const [images, setImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const getImages = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://rocky-lowlands-50976.herokuapp.com/api/v1/image/gallery'
    );

    console.log(response.data.data);

    setImage(response.data.data);

    setLoading(false);
  };

  useEffect(() => {
    getImages();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'end',
            height: '100vh',
          }}
        >
          <Loader
            type="Bars"
            color="#d1ac6d"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        <>
          <Navbar transparent />
          <main>
            <div
              className="slide-container relative pt-16 pb-32"
              style={{ height: '75vh' }}
            >
              <Slide arrows={false}>
                <div className="each-slide">
                  <div
                    style={{
                      background: `url(${slideImages[0]}) no-repeat center center/cover`,
                      height: '90vh',
                    }}
                  >
                    <div
                      id="blackOverlay"
                      className="w-full h-full opacity-50 bg-black"
                    >
                      <div className="container w-full lg:w-6/12 px-4 ml-auto mr-auto text-center pt-48">
                        <h1 className="text-white font-semibold text-5xl md:mb-4 sm:mb-0">
                          Dream Housing Society Private Limited
                        </h1>
                        <p
                          className="md:leading-7 text-3xl sm:leading-normal"
                          style={{
                            color: '#d1ac6d',
                          }}
                        >
                          Where Dream Come True
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="each-slide">
                  <div
                    style={{
                      background: `url(${slideImages[1]}) no-repeat center center/cover`,
                      height: '90vh',
                    }}
                  >
                    <div
                      id="blackOverlay"
                      className="w-full h-full opacity-50 bg-black"
                    ></div>
                  </div>
                </div>
                <div className="each-slide">
                  <div
                    style={{
                      background: `url(${slideImages[2]}) no-repeat center center/cover`,
                      height: '90vh',
                    }}
                  >
                    <div
                      id="blackOverlay"
                      className="w-full h-full opacity-50 bg-black"
                    ></div>
                  </div>
                </div>
                <div className="each-slide">
                  <div
                    style={{
                      background: `url(${slideImages[3]}) no-repeat center center/cover`,
                      height: '90vh',
                    }}
                  >
                    <div
                      id="blackOverlay"
                      className="w-full h-full opacity-50 bg-black"
                    ></div>
                  </div>
                </div>
              </Slide>
            </div>

            <section className="pb-20 bg-gray-300">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center mt-32">
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto pt-20">
                    <h5 className="text-2xl font-semibold leading-normal">
                      Welcome To
                    </h5>
                    <h3 className="text-3xl mb-2 font-semibold leading-normal">
                      Dream Housing
                    </h3>
                    <p className="text-lg font-bold leading-relaxed mt-4 mb-4 text-gray-700">
                      Dream Housing (Pvt) Ltd offers a Promising future giving
                      new Dimensions to Real Estate with Luxury Living and
                      Trending Life Style. We suggest most preferred Destination
                      for not only Pakistanis butt also overseas investors.
                    </p>
                    <p className="text-lg font-bold leading-relaxed mt-0 mb-4 text-gray-700">
                      I am greatly thankful to all our esteem clients /
                      investors for trusting us and ensure you our commitment to
                      cater for all socioeconomic classes of the society with
                      equal opportunities.
                    </p>
                    <p className="text-lg font-bold leading-relaxed mt-0 mb-4 text-gray-700">
                      We aim at providing best choice locations with world-class
                      amenities guarantying highest standards, well in time
                      delivery meeting by our promises, thus resulting in life
                      time satisfaction.
                    </p>
                  </div>
                  <div className="w-full md:w-4/12 px-4 mr-auto pt-20">
                    <div
                      className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg"
                      style={{ background: '#d1ac6d' }}
                    >
                      <img
                        alt="..."
                        src={aboutus}
                        className="w-full align-middle rounded-t-lg"
                      />
                      <blockquote className="relative p-8 mb-4">
                        <svg
                          preserveAspectRatio="none"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 583 95"
                          className="absolute left-0 w-full block"
                          style={{
                            height: '95px',
                            top: '-94px',
                          }}
                        >
                          <polygon
                            points="-30,95 583,95 583,65"
                            className="fill-current"
                            style={{ color: '#d1ac6d' }}
                          ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                          Top Notch Services
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever happens.
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gray-200 ">
              <h2 className="text-5xl font-bold text-center pb-10">
                Our Facilities
              </h2>
              <Tabs color="gray" />
            </section>

            <section>
              <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
                <h2 className="text-5xl font-bold text-center pb-10">
                  Gellery
                </h2>
                <Carousel
                  responsive={responsive}
                  showDots={false}
                  autoPlay={true}
                  itemClass="image-item"
                  arrows={false}
                  autoPlaySpeed={1000}
                  infinite={true}
                >
                  {images.map((img) => (
                    <img
                      key={img._id}
                      src={`${img.image}`}
                      alt=""
                      className="object-fill p-1"
                      style={{ height: '600px' }}
                    />
                  ))}
                </Carousel>
              </div>
            </section>

            <section className="pt-20">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=6J8s0Ds1OQ8"
                width="100vw"
                height={'600px'}
              />
            </section>
            {/* <h2 className="text-4xl font-semibold">
                      Authorized Dealer
                    </h2> */}
            <section className="pt-20 pb-20">
              <h2 className="text-5xl font-bold text-center pb-10">
                Authorized Dealer
              </h2>
              <Carousel
                responsive={responsive}
                showDots={false}
                autoPlay={true}
                itemClass="image-item"
                arrows={false}
                autoPlaySpeed={1000}
                infinite={true}
              >
                <img
                  src={aut_1}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_2}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_3}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_4}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_5}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_6}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_7}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_8}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_9}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_10}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_11}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_12}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_13}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_14}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_15}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_16}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_17}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_18}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_19}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_20}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_21}
                  style={{ height: '500px' }}
                  alt=""
                  className="object-fill p-2"
                />
              </Carousel>
            </section>

            <section
              className="relative py-20 text-white"
              style={{ backgroundColor: '#d1ac6d' }}
            >
              <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: '80px', transform: 'translateZ(0)' }}
              >
                <svg
                  className="absolute bottom-0 overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-white fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>

              <div className=" px-4">
                <h2 className="text-5xl font-bold text-center pb-10">
                  Book Now
                </h2>
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-5">
                    <img
                      alt="..."
                      className="max-w-full h-auto rounded-lg shadow-lg "
                      src="https://parkavenue.com.pk/wp-content/uploads/2019/09/23213099_878153629020847_5309844393303557310_o.jpg?id=1608"
                    />
                  </div>
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-bold text-gray-900">
                          For Booking Contact us
                        </h4>
                        <p className="leading-relaxed font-bold mt-1 mb-4 text-gray-600">
                          Complete this form and we will get back to you soon
                        </p>
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Full Name"
                            style={{ transition: 'all .15s ease' }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Phone
                          </label>
                          <input
                            type="number"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Number"
                            style={{ transition: 'all .15s ease' }}
                          />
                        </div>

                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Message
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                            placeholder="Type a message..."
                          />
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                            type="button"
                            style={{ transition: 'all .15s ease' }}
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative py-20 text-white bg-black">
              <div className=" px-4">
                <h2 className="text-5xl font-bold text-center pb-10">
                  Location
                </h2>
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-5">
                    <a
                      href="https://www.google.com/maps/place/31%C2%B019'57.1%22N+74%C2%B013'56.1%22E/@31.3315909,74.2331606,17z/data=!4m5!3m4!1s0x0:0x0!8m2!3d31.3325348!4d74.2322487?hl=en"
                      // eslint-disable-next-line
                    >
                      <img
                        alt="..."
                        className="max-w-full h-auto rounded-lg shadow-lg "
                        src={place}
                      />
                    </a>
                  </div>
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-5">
                    <img
                      alt="..."
                      className="max-w-full h-auto rounded-lg shadow-lg "
                      src={location}
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
