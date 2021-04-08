import { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from '@ramonak/react-progress-bar';
import Navbar from './components/Navbar';

const UploadPhoto = () => {
  const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  useEffect(() => {
    getAllImages();
  }, []);

  const getAllImages = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://rocky-lowlands-50976.herokuapp.com/api/v1/image/gallery'
    );

    setImage(response.data.data);

    setLoading(false);
  };

  const deleteImage = async (id) => {
    await axios.delete(
      `https://rocky-lowlands-50976.herokuapp.com/api/v1/image/gallery/${id}`
    );

    const array = image.filter((item) => item._id !== id);
    setImage(array);
  };

  const uploadImage = async (e) => {
    try {
      const images = e.target.files[0];

      // send image to the server
      const formData = new FormData();
      formData.append('file', images, images.name);

      const response = await axios.post(
        'https://rocky-lowlands-50976.herokuapp.com/api/v1/image/gallery',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            setUploadPercentage(
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              )
            );

            if (
              parseInt(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              ) === 100
            ) {
              setUploadPercentage(0);
            }
          },
        }
      );

      let array = [...image];

      array.push(response.data.data);

      setImage(array);
    } catch (err) {
      if (err) {
        setMessage(err.response.data.error);
        setShowAlert(true);
      }
    }
  };

  return (
    <>
      <Navbar />
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
                onChange={uploadImage}
                className="relative border-dotted h-48 rounded-lg border-2 border-blue-700 bg-gray-100 flex justify-center items-center"
              >
                <div className="absolute">
                  <div className="flex flex-col items-center">
                    {' '}
                    <i className="fa fa-folder-open fa-4x text-blue-700" />{' '}
                    <span className="block text-gray-400 font-normal">
                      Please upload the image less Then (1 MB)
                    </span>{' '}
                  </div>
                </div>{' '}
                <input
                  type="file"
                  className="h-full w-full opacity-0"
                  name="file"
                />
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
      <div className="container mx-auto">
        {loading ? null : (
          <section className="pt-8 px-4">
            {image.length === 0 ? (
              <h2 className="text-4xl font-semibold text-center">
                Not Image Found, Please upload the Image
              </h2>
            ) : null}
            <div className="flex flex-wrap -mx-4">
              {image.map((img) => (
                <div className="md:w-1/3 px-4 mb-8 relative">
                  <img
                    className="rounded shadow-md"
                    src={`https://rocky-lowlands-50976.herokuapp.com/uploads/${img.image}`}
                    alt=""
                  />
                  <div
                    onClick={() => deleteImage(img._id)}
                    className="absolute top-0 left-5"
                  >
                    <i className="fas fa-trash-alt text-yellow-500"></i>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default UploadPhoto;
