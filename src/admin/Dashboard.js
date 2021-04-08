import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';

const Dashboard = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContactList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://rocky-lowlands-50976.herokuapp.com/api/v1/book'
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

  const updateSatus = async (id) => {
    const response = await axios.get(
      `https://rocky-lowlands-50976.herokuapp.com/api/v1/book/status/${id}`
    );

    const indexOf = book.findIndex((item) => item._id === id);

    let copyBook = [...book];

    copyBook[indexOf] = response.data.data;

    setBook(copyBook);
  };
  return (
    <div>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold text-center">
            Contact & booking person list
          </h2>

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
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            phone
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Message
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {loading
                          ? null
                          : book.map((item) => (
                              <tr key={item._id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {item.name}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {item.phone}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {item.called ? (
                                    <button
                                      onClick={() => updateSatus(item._id)}
                                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500 text-white border-none outline-none"
                                    >
                                      DONE
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => updateSatus(item._id)}
                                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-white border-none outline-none"
                                    >
                                      CALL
                                    </button>
                                  )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {item.description}
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
    </div>
  );
};

export default Dashboard;
