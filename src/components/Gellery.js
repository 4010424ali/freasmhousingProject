import { useState, useEffect } from 'react';
import axios from 'axios';
import Gallery from 'react-grid-gallery';
import Navbar from './Navbar';

const Gellery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getImages();
    // eslint-disable-next-line
  }, []);

  const getImages = async () => {
    setLoading(true);
    const response = await axios.get(
      'https://rocky-lowlands-50976.herokuapp.com/api/v1/image/gallery'
    );
    response.data.data.map((item) => {
      images.push({
        src: `https://rocky-lowlands-50976.herokuapp.com/uploads/${item.image}`,
        thumbnail: `https://rocky-lowlands-50976.herokuapp.com/uploads/${item.image}`,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
      });
      return [];
    });

    setImages(images);
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-20 px-2 my-8">
        <h2 className="text-5xl font-bold text-center pb-10">Gellery</h2>
        {loading ? <h1>Loading</h1> : <Gallery images={images} />}
      </div>
    </div>
  );
};

export default Gellery;
