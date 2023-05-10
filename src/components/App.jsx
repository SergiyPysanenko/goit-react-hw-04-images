import React from 'react';
import { fetchImages } from './Servises/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from "./Loader/Loader";
import Modal from './Modal/Modal';
import { useState, useEffect } from 'react';


const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [per_page] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [errorMessage, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  // const [id, setId] = useState(null);

// class App extends Component {
//   state = {
//     searchQuery: '',
//     images: [],
//     page: 1,
//     per_page: 12,
//     isLoading: false,
//     loadMore: false,
//     error: null,
//     showModal: false,
//     largeImageURL: 'largeImageURL',
//     id: null,
//   };

useEffect(() => {
  const getImages = async () => {
    setIsLoading(true);
    if (!searchQuery) {
      setIsLoading(false);
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(searchQuery, page);
      setImages((prevImages) => [...prevImages, ...hits]);
      setLoadMore(page < Math.ceil(totalHits / per_page));
    } catch (error) {
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  getImages();
}, [searchQuery, errorMessage, page, per_page]);


  // componentDidUpdate(_, prevState) {
  //   const { searchQuery, page } = this.state;
  //   if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
  //     this.getImages(searchQuery, page);
  //   }
  // }

  // getImages = async (query, page) => {
  //   this.setState({ isLoading: true });
  //   if (!query) {
  //     return;
  //   }
  //   try {
  //     const { hits, totalHits } = await fetchImages(query, page);
  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...hits],
  //       loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
  //     }));
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // };

  const formSubmit = (query) => {
    setSearchQuery(query);
    setImages([]);
    setPage(1);
    setLoadMore(false);
  };

  // formSubmit = searchQuery => {
  //   this.setState({
  //     searchQuery,
  //     images: [],
  //     page: 1,
  //     loadMore: false,
  //   });
  // };

  const onloadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // onloadMore = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  const openModal = (largeImageURL) => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
  };

  // openModal = largeImageURL => {
  //   this.setState({
  //     showModal: true,
  //     largeImageURL: largeImageURL,
  //   });
  // };

  const closeModal = () => {
    setShowModal(false);
  };

  // closeModal = () => {
  //   this.setState({
  //     showModal: false,
  //   });
  // };

  return (
    <>
      <Searchbar onSubmit={formSubmit} />
      {isLoading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {loadMore && <Button onloadMore={onloadMore} page={page} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </>
  );
};

export default App;

//   render() {
//     const { images, isLoading, loadMore, page, showModal, largeImageURL } =
//       this.state;
//     return (
//       <>
//         <Searchbar onSubmit={this.formSubmit} />
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <ImageGallery images={images} openModal={this.openModal} />
//         )}
//         {loadMore && <Button onloadMore={this.onloadMore} page={page} />}
//         {showModal && (
//           <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
//         )}
//       </>
//     );
//   }
// }

// export default App;
