import { Slide } from 'react-slideshow-image';
import ReactPlayer from 'react-player';
import 'react-slideshow-image/dist/styles.css';
import './components/styles/index.css';
import './index.css';

// Images
import image1 from './assets/img/01-min.jpg';
import image2 from './assets/img/02-min.jpg';
import image3 from './assets/img/03-min.jpg';
import team1 from './assets/img/team-1-800x800.jpg';
import team2 from './assets/img/team-2-800x800.jpg';
import team3 from './assets/img/team-3-800x800.jpg';
import team4 from './assets/img/team-4-470x470.png';
import video from './assets/video/video.mp4';
import aboutus from './assets/img/aboutus.jpg';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import House from './components/Hosue';
import Testimonial from './components/Testimonial';

const slideImages = [image1, image2, image3];

function App() {
  return (
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
                  height: '75vh',
                }}
              >
                <div
                  id="blackOverlay"
                  className="w-full h-full opacity-50 bg-black"
                >
                  <div className="container w-full lg:w-6/12 px-4 ml-auto mr-auto text-center pt-32">
                    <h1 className="text-white font-semibold text-5xl md:mb-4 sm:mb-0">
                      Welcome To Dream House
                    </h1>
                    <p className="text-white md:leading-7 sm:leading-normal">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellendus dolores excepturi nemo? In blanditiis
                      asperiores fuga, tempora voluptas similique possimus quis
                      ad, dignissimos, quam dolorem natus! Esse debitis tempora
                      obcaecati quia nam aliquam eligendi, necessitatibus
                      tenetur inventore excepturi rerum. Soluta molestias culpa
                      non, magni aliquam repellendus autem perspiciatis iste.
                      Rem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  background: `url(${slideImages[1]}) no-repeat center center/cover`,
                  height: '75vh',
                }}
              >
                <div
                  id="blackOverlay"
                  className="w-full h-full opacity-50 bg-black"
                >
                  <div className="container w-full lg:w-6/12 px-4 ml-auto mr-auto text-center pt-32">
                    <h1 className="text-white font-semibold text-5xl md:mb-4 sm:mb-0">
                      Make Your Dream
                    </h1>
                    <p className="text-white md:leading-7 sm:leading-normal">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellendus dolores excepturi nemo? In blanditiis
                      asperiores fuga, tempora voluptas similique possimus quis
                      ad, dignissimos, quam dolorem natus! Esse debitis tempora
                      obcaecati quia nam aliquam eligendi, necessitatibus
                      tenetur inventore excepturi rerum. Soluta molestias culpa
                      non, magni aliquam repellendus autem perspiciatis iste.
                      Rem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="each-slide">
              <div
                style={{
                  background: `url(${slideImages[2]}) no-repeat center center/cover`,
                  height: '75vh',
                }}
              >
                <div
                  id="blackOverlay"
                  className="w-full h-full opacity-50 bg-black"
                >
                  <div className="container w-full lg:w-6/12 px-4 ml-auto mr-auto text-center pt-32">
                    <h1 className="text-white font-semibold text-5xl md:mb-4 sm:mb-0">
                      Dream Comes true
                    </h1>
                    <p className="text-white md:leading-7 sm:leading-normal">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellendus dolores excepturi nemo? In blanditiis
                      asperiores fuga, tempora voluptas similique possimus quis
                      ad, dignissimos, quam dolorem natus! Esse debitis tempora
                      obcaecati quia nam aliquam eligendi, necessitatibus
                      tenetur inventore excepturi rerum. Soluta molestias culpa
                      non, magni aliquam repellendus autem perspiciatis iste.
                      Rem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
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
                  Dream Housing (PVT) Ltd consists of highly motivated, well
                  qualified, and experienced professionals, who are all the time
                  bringing world class support and services to our clients. The
                  project is designed as a fully secured gated community with
                  luxurious living and exclusive life style providing equal
                  opportunities to all classes of the society.
                </p>
                <p className="text-lg font-bold leading-relaxed mt-0 mb-4 text-gray-700">
                  We are here to add a highly sophisticated dynamic fellowship
                  and are committed to change the concept of luxury in to a
                  comfortable life style.
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
          <h2 className="text-5xl font-bold text-center pb-10">Facilities</h2>
          <Tabs color="gray" />
        </section>

        <section>
          <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
            <div className="container mx-auto">
              <h2 className="text-5xl font-bold text-center pb-10">Houses</h2>
              <div className="line"></div>
              <div className="housing">
                <House />
                <House />
                <House />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-5xl font-bold text-center">Testimonial</h2>
          <Testimonial />
        </section>

        <section className="pt-20">
          <ReactPlayer
            url={video}
            loop={true}
            playing={true}
            controls={true}
            width="100vw"
          />
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Authorized Dealer</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team1}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Best Dealer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team2}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Marketing Specialist
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team3}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Authorized Dealer
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={team4}
                    className="shadow-lg rounded-full max-w-full mx-auto"
                    style={{ maxWidth: '120px' }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Founder and CEO
                    </p>
                    <div className="mt-6">
                      <button
                        className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-dribbble"></i>
                      </button>
                      <button
                        className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-google"></i>
                      </button>
                      <button
                        className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button
                        className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                      >
                        <i className="fab fa-instagram"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 bg-gray-900 text-white">
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
            <h2 className="text-5xl font-bold text-center pb-10">Book Now</h2>
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
                      Complete this form and we will get back to you in 24
                      hours.
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
      </main>
      <Footer />
    </>
  );
}

export default App;
