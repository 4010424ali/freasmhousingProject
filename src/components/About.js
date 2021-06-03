import Navbar from './Navbar';
import Footer from './Footer';
import AboutUs from '../assets/img/aboutus.jpg';
import ceo from '../assets/img/ceo.jpeg';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative py-20 bg-white text-gray-900">
          <div className=" px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mb-5">
                <h2 className="text-3xl font-bold mb-3">CEO Message</h2>
                <p className="font-bold text-justify">
                  Dream Housing (Pvt) Ltd offers a Promising future giving new
                  Dimensions to Real Estate with Luxury Living and Trending Life
                  Style. We suggest most preferred Destination for not only
                  Pakistanis butt also overseas investors.
                </p>
                <br />
                <p className="font-bold text-justify">
                  I am greatly thankful to all our esteem clients / investors
                  for trusting us and ensure you our commitment to cater for all
                  socioeconomic classes of the society with equal opportunities.
                </p>
                <br />
                <p className="font-bold text-justify">
                  We aim at providing best choice locations with world-class
                  amenities guarantying highest standards, well in time delivery
                  meeting by our promises, thus resulting in life time
                  satisfaction.
                </p>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <img src={ceo} alt="" />
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
                <h3 className="text-5xl font-bold mb-6">Our Vision</h3>
                <p className="text-xl mb-9 text-justify">
                  Our vision is that each Pakistani should be able to live in a
                  community where he feels complete sense of safety,
                  fulfillment, and comfort along with crime free environment
                  without any trace or compromise.{' '}
                </p>
                <h3 className="text-5xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl mb-9 text-justify">
                  Our mission is to develop a ressidencia reaching the epitome
                  of perfection in its creation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
