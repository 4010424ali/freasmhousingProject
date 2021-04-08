import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import Navbar from './Navbar';
import Footer from './Footer';
import AboutUs from '../assets/img/aboutus.jpg';

const About = () => {
  const Map = ReactMapboxGl({
    boxZoom: true,
    accessToken:
      'pk.eyJ1IjoiYWxpaGFtemE0MjQiLCJhIjoiY2tuM2gwZndzMDd6dTJxcWJlYjJlbjV4ZSJ9.mO6Ty8nqnoth54Zcuxpuhg',
  });
  return (
    <>
      <Navbar />
      <main>
        <section className="relative py-20 bg-white text-gray-900">
          <div className=" px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-5">
                <h2 className="text-3xl font-bold mb-3">CEO Message</h2>
                <p className="font-bold">
                  Dream Housing (Pvt) Ltd offers a Promising future giving new
                  Dimensions to Real Estate with Luxury Living and Trending Life
                  Style. We suggest most preferred Destination for not only
                  Pakistanis butt also overseas investors.
                </p>
                <br />
                <p className="font-bold">
                  I am greatly thankful to all our esteem clients / investors
                  for trusting us and ensure you our commitment to cater for all
                  socioeconomic classes of the society with equal opportunities.
                </p>
                <br />
                <p className="font-bold">
                  We aim at providing best choice locations with world-class
                  amenities guarantying highest standards, well in time delivery
                  meeting by our promises, thus resulting in life time
                  satisfaction.
                </p>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <img src={AboutUs} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 bg-gray-900 text-white">
          <div className=" px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-5">
                <img
                  alt="..."
                  className="max-w-full h-auto rounded-lg shadow-lg "
                  src={AboutUs}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <h3 className="text-5xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl mb-9">
                  Our mission is to develop a ressidencia reaching the epitome
                  of perfection in its creation.
                </p>
                <h3 className="text-5xl font-bold mb-6">Our Vision</h3>
                <p className="text-xl mb-9">
                  Our vision is that each Pakistani should be able to live in a
                  community where he feels complete sense of safety,
                  fulfillment, and comfort along with crime free environment
                  without any trace or compromise.{' '}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="py-20">
          <div className="container mx-auto">
            <Map
              // eslint-disable-next-line
              style="mapbox://styles/mapbox/streets-v9"
              containerStyle={{
                height: '50vh',
              }}
            >
              <Layer
                type="symbol"
                id="marker"
                layout={{ 'icon-image': 'marker-15' }}
              >
                <Feature coordinates={[31.35833, 74.23417]} />
              </Layer>
            </Map>
          </div>
        </section>

        <section className="py-20 px-20">
          <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center my-10">
              Core Values of the project
            </h2>
            <ul className="list-disc text-black">
              <li className="text-lg">
                Completely safe and secure gated community 24/7 manned check
                post, alert and ever ready foot / mobile patrols.
              </li>
              <li>
                Complete surveillance of each part of the society through CCTV
                cameras, all time monitored from a central control room.
              </li>
              <li>
                Specious roads, lush green parks with beautiful flowers and ever
                green plantation.
              </li>
              <li>Every utility connection is underground.</li>
              <li>
                Independent Graveyard, Grand Jamia Masjid, high standard school,
                Medical College and University on walking distance.
              </li>
              <li>Recreational / Safari Park with jogging tracks.</li>
              <li>
                Well manage community center for the social gathering of the
                residents.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
