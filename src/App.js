import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
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

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 31.345369, lng: 74.241225 }}
    >
      <Marker position={{ lat: 31.345369, lng: 74.241225 }} />
    </GoogleMap>
  ))
);

const MainOffices = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{ lat: 31.4432589, lng: 74.2652773 }}
    >
      <Marker position={{ lat: 31.4432589, lng: 74.2652773 }} />
    </GoogleMap>
  ))
);

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
          <Navbar />
          <main>
            <div
              className="slide-container relative"
              style={{ height: '73vh' }}
            >
              <Slide arrows={false}>
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
                    >
                      <div className="container w-full lg:w-6/12 px-4 ml-auto mr-auto text-center pt-72">
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
                    <p className="text-lg text-justify font-bold leading-relaxed mt-4 mb-4 text-gray-700">
                      Dream Housing (Pvt) Ltd offers a Promising future giving
                      new Dimensions to Real Estate with Luxury Living and
                      Trending Life Style. We suggest most preferred Destination
                      for not only Pakistanis butt also overseas investors.
                    </p>
                    <p className="text-lg text-justify font-bold leading-relaxed mt-0 mb-4 text-gray-700">
                      I am greatly thankful to all our esteem clients /
                      investors for trusting us and ensure you our commitment to
                      cater for all socioeconomic classes of the society with
                      equal opportunities.
                    </p>
                    <p className="text-lg text-justify font-bold leading-relaxed mt-0 mb-4 text-gray-700">
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
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gray-200 ">
              <h2 className="text-5xl font-bold text-center pb-10">
                Our Facilities
              </h2>
              <Tabs color="black" />
            </section>
            <section className="pb-20 ">
              <div className="container mx-auto px-4">
                <h2 className="text-5xl mt-12 font-bold text-center pb-10">
                  Our Facilities
                </h2>
                <div className="flex flex-wrap items-center">
                  <div className="w-full md:w-5/12 px-4 mr-auto ml-auto ">
                    <ul className="px-0 list-disc">
                      <li
                        className="border  rounded-sm px-3 py-3"
                        style={{ borderBottomWidth: 0 }}
                      >
                        Completely safe and secure gated community 24/7 manned
                        check post, alert and ever ready foot / mobile patrols.
                      </li>
                      <li
                        className="border  rounded-sm px-3 py-3"
                        style={{ borderBottomWidth: 0 }}
                      >
                        Complete surveillance of each part of the society
                        through CCTV cameras, all time monitored from a central
                        control room.
                      </li>
                      <li
                        className="border rounded-sm px-3 py-3"
                        style={{ borderBottomWidth: 0 }}
                      >
                        Specious roads, lush green parks with beautiful flowers
                        and ever green plantation.
                      </li>
                      <li
                        className="border  rounded-sm px-3 py-3"
                        style={{ borderBottomWidth: 0 }}
                      >
                        Every utility connection is underground.
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-4/12 px-4 mr-auto">
                    <ul className="px-0 list-disc">
                      <li
                        className="border rounded-sm px-3 py-3"
                        style={{ borderBottomWidth: 0 }}
                      >
                        Independent Graveyard, Grand Jamia Masjid, high standard
                        school, Medical College and University on walking
                        distance.
                      </li>
                      <li
                        className="border  rounded-sm px-3 py-3"
                        style={{ borderBottomWidth: 0 }}
                      >
                        Recreational / Safari Park with jogging tracks.
                      </li>
                      <li
                        className="border   rounded-sm px-3 py-3"
                        style={{ borderBottomWidth: 0 }}
                      >
                        Well manage community center for the social gathering of
                        the residents
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
                <h2 className="text-5xl font-bold text-center pb-10">
                  Gallery
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
                      style={{ height: '400px' }}
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
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_2}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_3}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_4}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_5}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_6}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_7}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_8}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_9}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_10}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_11}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_12}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_13}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_14}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_15}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_16}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_17}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_18}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_19}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_20}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
                <img
                  src={aut_21}
                  style={{ height: '400px', width: '100vw' }}
                  alt=""
                  className="object-fill p-2"
                />
              </Carousel>
            </section>

            <section className="relative py-20 text-white bg-black">
              <div className=" px-4">
                <h2 className="text-5xl font-bold text-center pb-10">
                  Location
                </h2>
                <div className="items-center flex flex-wrap">
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-5">
                    <div className="card">
                      <div className="card-header">
                        <MapWithAMarker
                          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQGUzk8Y0jG08FycmVY4INYEMmE5VC2Ko&v=3.exp&libraries=geometry,drawing,places"
                          loadingElement={<div style={{ height: `100%` }} />}
                          containerElement={
                            <div
                              style={{ height: `200px`, borderRadius: '10px' }}
                            />
                          }
                          mapElement={<div style={{ height: `100%` }} />}
                        />
                      </div>
                      <div className="card-body">
                        <h3 className="text-center font-semibold text-2xl">
                          Site Location
                        </h3>
                        <h5 className="p-5 text-xl">
                          <span>
                            <i class="fas fa-map-marker"></i>
                          </span>{' '}
                          : 5 Minute Drive from Adda Plot Ring Road.
                        </h5>
                        <p className="px-5 text-sm">
                          <span>
                            <i class="fas fa-envelope-square"></i>
                          </span>{' '}
                          : dreamhousingscheme@gmail.com
                        </p>
                        <p className="px-5 py-4 text-sm">
                          <span>
                            <i className="fas fa-phone"></i>
                          </span>{' '}
                          : (042) 111 248 248
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-5">
                    <div className="card h-full">
                      <div className="card-header">
                        <MainOffices
                          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQGUzk8Y0jG08FycmVY4INYEMmE5VC2Ko&v=3.exp&libraries=geometry,drawing,places"
                          loadingElement={<div style={{ height: `100%` }} />}
                          containerElement={
                            <div
                              style={{ height: `200px`, borderRadius: '10px' }}
                            />
                          }
                          mapElement={<div style={{ height: `100%` }} />}
                        />
                      </div>
                      <div className="card-body p-5 ">
                        <h3 className="text-center font-semibold text-2xl">
                          Main Office
                        </h3>
                        <p className="p-5 ">
                          <span>
                            <i className="fas fa-map-marker"></i>
                          </span>{' '}
                          : 42-Commercial, Airline Housing Scheme, Main
                          Khayaban-e-Jinnah Road, Near Shaukat Khanum
                          Hospital,Lahore
                        </p>
                        <p className="px-5 text-sm">
                          <span>
                            <i className="fas fa-envelope-square"></i>
                          </span>
                          : dreamhousingscheme@gmail.com
                        </p>
                        <p className="px-5 pt-4">
                          <span>
                            <i className="fab fa-whatsapp"></i>
                          </span>{' '}
                          : 0311-1590111
                        </p>
                      </div>
                    </div>
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
