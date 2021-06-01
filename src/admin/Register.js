import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnic, setCnic] = useState('');
  const [expireOfCnic, setExpireOFCnic] = useState('');
  const [applicationNumber, setApplicationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const loginTheAdmin = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email.trim() === '' || password.trim() === '') {
      setMessage('Please fill all the field');
      setLoading(false);
      setShowAlert(true);
    } else {
      setShowAlert(false);
      setLoading(true);
      try {
        const response = await axios.post(
          'https://rocky-lowlands-50976.herokuapp.com/api/v1/auth/register',
          {
            name,
            email,
            cnic,
            expireOfCnic,
            applicationNumber,
            password,
          }
        );
        localStorage.setItem('token', `Bearer ${response.data.token}`);
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`;
        history.push('/login');
      } catch (err) {
        if (err.response) {
          setMessage(err.response.data.error);
          setShowAlert(true);
          setLoading(false);
        }
      }
    }
  };

  return (
    <>
      <main className="bg-gray-900">
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              {showAlert && (
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
              )}
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Enter Cnic like this (3414035648927)"
                onChange={(e) => setCnic(e.target.value)}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="expire Date DD/MM/YY"
                onChange={(e) => setExpireOFCnic(e.target.value)}
              />
              <input
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Enter Application Number"
                onChange={(e) => setApplicationNumber(e.target.value)}
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                disabled={loading}
                onClick={loginTheAdmin}
              >
                Create Account
              </button>
            </div>
            <div className="text-white mt-6">
              Already have an account?
              <Link
                className="no-underline border-b border-blue text-blue"
                to="/login"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
