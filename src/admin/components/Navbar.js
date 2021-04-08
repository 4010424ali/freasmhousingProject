import axios from 'axios';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/img/logo.jpeg';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('red');
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  const updatePassword = async () => {
    if (
      currentPassword.trim() === '' ||
      newPassword.trim() === '' ||
      confirmNewPassword.trim() === ''
    ) {
      setMessage('All Fields are required');
      setShowAlert(true);
    } else {
      if (newPassword !== confirmNewPassword) {
        setMessage('Password does not match');
        setShowAlert(true);
      } else {
        try {
          setShowAlert(false);
          await axios.put(
            'https://rocky-lowlands-50976.herokuapp.com/api/v1/auth/updatepassword',
            {
              currentPassword: currentPassword,
              newPassword: newPassword,
            }
          );

          localStorage.removeItem('token');

          setMessage('Password updated successfully');
          setCurrentPassword('');
          setNewPassword('');
          setConfirmNewPassword('');
          setColor('green');
          setShowAlert(true);

          setTimeout(() => {
            history.push('/login');
          }, 3000);
        } catch (error) {
          if (error.response) {
            setMessage(error.response.data.error);
            setColor('red');
            setShowAlert(true);
          }
        }
      }
    }
  };

  return (
    <>
      <nav
        className={
          (props.transparent
            ? 'top-0 absolute z-50 w-full'
            : 'relative shadow-lg') +
          ' flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg'
        }
        style={{ background: '#d1ac6d' }}
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
              <img src={logo} width="40" height="40" alt="" />
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
            style={{ background: '#d1ac6d' }}
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
                  to="/dashboard"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fas fa-chart-line text-lg leading-lg mr-2'
                    }
                  />{' '}
                  Dashboard
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
                  to="/uploadphoto"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-white'
                        : 'text-gray-500') +
                      ' fas fa-images text-lg leading-lg mr-2'
                    }
                  />{' '}
                  Gellery
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
                  to="/uploadpdf"
                >
                  <i
                    className={
                      (props.transparent
                        ? 'lg:text-gray-300 text-gray-500'
                        : 'text-gray-500') +
                      ' fas fa-file-pdf text-lg leading-lg mr-2'
                    }
                  />{' '}
                  upload documents
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <button
                  onClick={() => setShowModal(true)}
                  className={
                    (props.transparent
                      ? 'bg-white text-gray-800 active:bg-gray-100'
                      : 'bg-gray-900 text-white active:bg-pink-600') +
                    ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                  }
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <i className="fas fa-lock"></i> Change Password
                </button>
              </li>
              <li className="flex items-center">
                <button
                  onClick={logout}
                  className={
                    (props.transparent
                      ? 'bg-white text-gray-800 active:bg-gray-100'
                      : 'bg-gray-900 text-white active:bg-pink-600') +
                    ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
                  }
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">UPLOAD PDF</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {showAlert ? (
                    <div
                      className={`text-white px-6 py-4 border-0 rounded relative mb-4 bg-${color}-500`}
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
                  <div className="flex flex-col mb-4 w-full">
                    <label
                      className="mb-2 font-bold text-sm text-grey-darkest"
                      htmlFor="currentPassword"
                    >
                      Current Password
                    </label>
                    <input
                      className="border py-2 px-3 text-grey-darkest md:mr-2"
                      type="password"
                      name="currentPassowd"
                      id="currentPassword"
                      placeholder="Current password"
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4 w-full">
                    <label
                      className="mb-2 font-bold text-sm text-grey-darkest"
                      htmlFor="newPassowrd"
                    >
                      New Password
                    </label>
                    <input
                      className="border py-2 px-3 text-grey-darkest md:mr-2"
                      type="password"
                      name="newPassword"
                      id="newPassowrd"
                      placeholder="New Password"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mb-4 w-full">
                    <label
                      className="mb-2 font-bold text-sm text-grey-darkest"
                      htmlFor="confirmNewPassword"
                    >
                      Confirm New Password
                    </label>
                    <input
                      className="border py-2 px-3 text-grey-darkest md:mr-2"
                      type="password"
                      name="confirmNewPassword"
                      id="confirmNewPassword"
                      placeholder="Confirm New Password"
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-yellow-300 text-gray-800 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={updatePassword}
                  >
                    Save PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
