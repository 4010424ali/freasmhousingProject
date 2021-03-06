import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container mx-auto">
          <div className="header-grid">
            <p>
              <i class="fas fa-phone-volume"></i> (042) 111 248 248
            </p>
            <p className="hide">
              <i class="fas fa-envelope-square"></i>{' '}
              dreamhousingscheme@gmail.com
            </p>
          </div>
        </div>
      </header>
      <nav
        className={
          (props.transparent
            ? 'top-0 absolute z-50 w-full'
            : 'relative shadow-lg') +
          ' flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'
        }
        style={{ background: '#fff' }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className={
                (props.transparent ? 'text-white' : 'text-gray-800') +
                ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase'
              }
              to="/"
            >
              <img src={logo} width="60" height="60" alt="" />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? 'text-white' : 'text-gray-800') +
                  ' fas fa-bars'
                }
              ></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center  lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to="/"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fas fa-home text-lg leading-lg mr-2'
                    }
                  />{' '}
                  HOME
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to="/about"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-white'
                        : 'text-gray-500') +
                      ' fas fa-address-card text-lg leading-lg mr-2'
                    }
                  />{' '}
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to="/gellery"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fas fa-camera-retro text-lg leading-lg mr-2'
                    }
                  />{' '}
                  Gallery
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to="/contact"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fas fa-phone-square-alt text-lg leading-lg mr-2'
                    }
                  />{' '}
                  Contact
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to="/login"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fas fa-lock text-lg leading-lg mr-2'
                    }
                  />{' '}
                  login
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  to="/register"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fas fa-user text-lg leading-lg mr-2'
                    }
                  />{' '}
                  Register
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? 'bg-white text-gray-800 active:bg-gray-100'
                      : 'bg-pink-500 text-white active:bg-pink-600') +
                    ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                  }
                  type="button"
                  to="/downloadPDF"
                  style={{ transition: 'all .15s ease' }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Documents
                </Link>
              </li>
              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  href="https://www.facebook.com/DreamHousingPrivateLimited"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fab fa-facebook text-lg leading-lg '
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  href="#pablo"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fab fa-twitter text-lg leading-lg '
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    (props.transparent
                      ? 'lg:text-white lg:hover:text-gray-300 text-gray-800'
                      : 'text-gray-800 hover:text-gray-600') +
                    ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  }
                  href="https://www.youtube.com/channel/UCVzg9w-NJqUrID5lSwOB_ew"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fab fa-youtube text-lg leading-lg '
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
