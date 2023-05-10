import React from 'react';
import { fetchImages } from './Servises/Api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from "./Loader/Loader";
import Modal from './Modal/Modal';
import { useState, useEffect } from 'react';



function App (){
  const [searchQuery, setSearchQuery] = useState(``);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  // const [per_page] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('largeImageURL');
  // const [id]


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
  if(!page){
    return;
  }
  try {
    setIsLoading(true);
    const response = fetchImages (searchQuery, page);
    response.then(data => {
      data.data.hits.length === 0 ? error(`Nothing found`) : 
    }

    )

  }
  
  
  
  
  
  
  
  
  
  
//   const getImages = async (query, page) => {
//     setIsLoading(true);
//     if (!query) {
//       return;
//     }
//     try {
//       const { hits, totalHits } = await fetchImages(query, page);
//       setGetImages(prevImages => [...prevImages, ...hits]);
//       setLoadMore(page < Math.ceil(totalHits / per_page));
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };
// }, [searchQuery, page, per_page]);


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

  const formSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setGetImages([]);
    setPage(1);
    setLoadMore(false);
    };
    
    const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    };
    
    const openModal = largeImageURL => {
    setShowModal(true);
    setLargeImageURL(largeImageURL);
    };
    
    const closeModal = () => {
    setShowModal(false);
    };
    
      return (
    <>
    <Searchbar onSubmit={formSubmit} />
    {isLoading ? (
    <Loader />
    ) : (
    <ImageGallery images={images} openModal={openModal} />
    )}
    {loadMore && <Button onLoadMore={onLoadMore} page={page} />}
    {showModal && (
    <Modal largeImageURL={largeImageURL} onClose={closeModal} />
    )}
    </>
    );
    }
    
    export default App;



//   formSubmit = searchQuery => {
//     this.setState({
//       searchQuery,
//       images: [],
//       page: 1,
//       loadMore: false,
//     });
//   };

//   onloadMore = () => {
//     this.setState(prevState => ({ page: prevState.page + 1 }));
//   };

//   openModal = largeImageURL => {
//     this.setState({
//       showModal: true,
//       largeImageURL: largeImageURL,
//     });
//   };

//   closeModal = () => {
//     this.setState({
//       showModal: false,
//     });
//   };

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

export default App;
