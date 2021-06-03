import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import bg_register from '../assets/img/register_bg_2.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();

  const loginTheAdmin = async (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setMessage('Please fill all the field');
      setShowAlert(true);
    } else {
      setShowAlert(false);
      try {
        const response = await axios.post(
          'https://rocky-lowlands-50976.herokuapp.com/api/v1/auth/login',
          {
            email,
            password,
          }
        );
        localStorage.setItem('token', `Bearer ${response.data.token}`);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;

        const roleData = await axios.get(
          'https://rocky-lowlands-50976.herokuapp.com/api/v1/auth/me'
        );

        if (roleData.data.data.role === 'admin') {
          history.push('/dashboard');
        } else {
          history.push('/userInfo');
        }
      } catch (err) {
        if (err.response) {
          setMessage(err.response.data.error);
          setShowAlert(true);
        }
      }
    }
  };

  return (
    <main>
      <section className="w-full h-full">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundImage: `url(${bg_register})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto px-4 h-full py-24">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <h1 className="text-black text-center mb-3 py-4 font-bold text-4xl">
                    Admin login
                  </h1>
                  {showAlert ? (
                    <div
                      className={
                        'text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500'
                      }
                    >
                      <span className="text-xl inline-block mr-5 align-middle">
                        <i className="fas fa-bell" />
                      </span>
                      <span className="inline-block align-middle mr-8">
                        {message}
                      </span>
                      <button
                        className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                        onClick={() => setShowAlert(false)}
                      >
                        <span>×</span>
                      </button>
                    </div>
                  ) : null}
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: 'all 0.15s ease 0s' }}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Password"
                        style={{ transition: 'all 0.15s ease 0s' }}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox text-gray-800 ml-1 w-5 h-5"
                          style={{ transition: 'all 0.15s ease 0s' }}
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">
                          Remember me
                        </span>
                      </label>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style={{ transition: 'all 0.15s ease 0s' }}
                        onClick={loginTheAdmin}
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="text-black text-center mt-6">
                      Don't have an account?
                      <Link
                        className="no-underline border-b border-blue text-blue"
                        to="/register"
                      >
                        Register
                      </Link>
                      .
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a href="#pablo" className="text-gray-300">
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div className="w-1/2 text-right">
                  <a href="#pablo" className="text-gray-300">
                    <small>Create new account</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="absolute w-full bottom-0 bg-gray-900 pb-6">
          <div className="container mx-auto px-4">
            <hr className="mb-6 border-b-1 border-gray-700" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4">
                <div className="text-sm text-white font-semibold py-1">
                  Copyright © 2019 <span>--</span> {''}
                  <Link
                    to="/"
                    className="text-white hover:text-gray-400 text-sm font-semibold py-1"
                  >
                    Digital Inpirsion
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-8/12 px-4">
                <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                  <li>
                    <Link
                      to="/"
                      className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="http://blog.creative-tim.com"
                      className="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                    >
                      Download
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Login;
