import { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import Navbar from './components/Navbar';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const UploadDocuments = () => {
  const [pdf, setPDF] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [file, setFile] = useState({});

  const uploadPdf = async (e) => {
    try {
      const formData = new FormData();

      formData.append('file', file, file.name);
      formData.append('name', email);

      const response = await axios.post(
        'https://rocky-lowlands-50976.herokuapp.com/api/v1/pdf',
        formData
      );

      console.log(response.data.data);
      let array = [...pdf];

      array.push(response.data.data);

      setPDF(array);

      setShowAlert(false);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.error);
        setShowAlert(true);
      }
    }
  };

  useEffect(() => {
    getAllPdf();
  }, []);

  const getAllPdf = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://rocky-lowlands-50976.herokuapp.com/api/v1/pdf'
    );

    setPDF(response.data.data);
    setLoading(false);
  };

  dayjs.extend(relativeTime);

  const deletePDF = async (id) => {
    await axios.delete(
      `https://rocky-lowlands-50976.herokuapp.com/api/v1/pdf/${id}`
    );

    const response = pdf.filter((item) => item._id !== id);

    setPDF(response);
  };

  return (
    <>
      <Navbar />
      {loading ? null : (
        <>
          <div className="py-20  bg-white px-2">
            <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
              <div className="md:flex">
                <div className="w-full p-3">
                  <div className="mt-15">
                    <ProgressBar
                      baseBgColor="#ffffff"
                      completed={uploadPercentage}
                    />
                  </div>
                  <br />
                  <div
                    onClick={() => setShowModal(true)}
                    className="relative border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center"
                  >
                    <div className="absolute">
                      <div className="flex flex-col items-center">
                        {' '}
                        <i className="fa fa-folder-open fa-4x text-blue-700" />{' '}
                        <span className="block text-gray-400 font-normal">
                          Please upload pdf (1 Mb)
                        </span>{' '}
                      </div>
                    </div>{' '}
                  </div>
                  <br />
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
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-20">
            <h2 className="text-5xl font-bold text-center">All PDF</h2>
            {pdf.map((item) => (
              <div className="flex flex-wrap justify-center items-center mt-5 px-20">
                <div className="w-full md:w-5/12 px-4 ">
                  <h1 className="text-2xl">{item.name}</h1>
                  <p>
                    {'  '}
                    Created At: {dayjs(item.createdAt).fromNow()}
                  </p>
                </div>

                <div className="w-full md:w-4/12 my-10">
                  <a
                    href={`https://rocky-lowlands-50976.herokuapp.com/pdf/${item.pdf}`}
                    target={'_blank'}
                    class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg"
                    style={{ backgroundColor: '#d1ac6d' }}
                  >
                    View & Download PDF
                  </a>

                  <i
                    onClick={() => deletePDF(item._id)}
                    style={{ cursor: 'pointer' }}
                    className="fas fa-trash-alt text-red-500"
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
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
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Name"
                      style={{ transition: 'all 0.15s ease 0s' }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="file"
                      name="pdf"
                      onChange={(e) => setFile(e.target.files[0])}
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
                    onClick={uploadPdf}
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
};

export default UploadDocuments;
