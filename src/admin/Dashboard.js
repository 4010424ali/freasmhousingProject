import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

const Dashboard = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');
  const [application, setApplication] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');

  const getContactList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://rocky-lowlands-50976.herokuapp.com/api/v1/applicationNumber'
      );
      console.log(response.data.data);
      setBook(response.data.data);
      setLoading(false);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getContactList();
  }, []);

  const openTheModel = (applicationNumber, id) => {
    setId(id);
    setNumber(applicationNumber);
    setShowModal(true);
  };

  const updateTheNumber = async () => {
    try {
      const response = await axios.put(
        `https://rocky-lowlands-50976.herokuapp.com/api/v1/applicationNumber/${id}`,
        {
          applicationNumber: number,
        }
      );
      console.log(book.findIndex((num) => num._id === id));

      const index = book.findIndex((num) => num._id === id);

      let updateBook = book;

      updateBook[index] = response.data.data;

      setBook(updateBook);

      setShowModal(false);
    } catch (error) {
      console.log('error');
    }
  };

  const createApplicationNumber = async () => {
    try {
      if (application.trim() === '') {
        setMessage('Please Enter Application Number');
        setShowAlert(true);
      } else {
        const response = await axios.post(
          'https://rocky-lowlands-50976.herokuapp.com/api/v1/applicationNumber',
          {
            applicationNumber: application,
          }
        );

        let newBook = book;

        newBook.push(response.data.data);

        setBook(newBook);
        setApplication('');
      }
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.error);
        setShowAlert(true);
      }
    }
  };

  const deleteApplicationNumber = async (_id) => {
    try {
      await axios.delete(
        `https://rocky-lowlands-50976.herokuapp.com/api/v1/applicationNumber/${_id}`
      );

      const newBook = book.filter((num) => num._id !== _id);

      setBook(newBook);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center">
            Application Number
          </h2>
          {showAlert && (
            <div
              className={
                'text-white px-6 py-4 border-0 my-5 rounded relative mb-4 bg-red-500'
              }
            >
              <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
              </span>
              <span className="inline-block align-middle mr-8">{message}</span>
              <button
                className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                onClick={() => setShowAlert(false)}
              >
                <span>×</span>
              </button>
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Enter the application Number"
              class="px-3 py-3 mb-4 mt-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
              onChange={(e) => setApplication(e.target.value)}
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={createApplicationNumber}
            >
              Add apllication Number
            </button>
          </div>
          {/* Table list */}
          <div>
            &gt;
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Application Number
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Edit
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Delete
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {loading
                          ? null
                          : book.map((item, index) => (
                              <tr key={item._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {index + 1}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {item.applicationNumber}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <button
                                    onClick={() =>
                                      openTheModel(
                                        item.applicationNumber,
                                        item._id
                                      )
                                    }
                                  >
                                    <i class="fas fa-pencil-alt"></i>
                                  </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <button
                                    onClick={() =>
                                      deleteApplicationNumber(item._id)
                                    }
                                  >
                                    <i
                                      style={{ color: 'red' }}
                                      class="fas fa-trash"
                                    ></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
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
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Number"
                    style={{ transition: 'all 0.15s ease 0s' }}
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-black font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-black text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={updateTheNumber}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Dashboard;
