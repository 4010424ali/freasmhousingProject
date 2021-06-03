import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6" style={{ background: '#d1ac6d' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>

              <div className="mt-6 mb-10">
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-twitter"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/register"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/login"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to="/contact"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Dream Housing soceity by{' '}
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  Digital Inspiron
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
