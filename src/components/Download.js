import { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import Navbar from './Navbar';

const Download = () => {
  const [pdf, setPdf] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllPdf();
  }, []);

  const getAllPdf = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://rocky-lowlands-50976.herokuapp.com/api/v1/pdf'
    );

    setPdf(response.data.data);
    setLoading(false);
  };

  dayjs.extend(relativeTime);

  return (
    <div>
      <Navbar />
      {loading ? null : (
        <div className="container mx-auto py-20">
          <h2 className="text-5xl font-bold text-center">
            View & Download PDF
          </h2>
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
                  rel="noreferrer"
                  class="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg"
                  style={{ backgroundColor: '#d1ac6d' }}
                >
                  View & Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Download;
