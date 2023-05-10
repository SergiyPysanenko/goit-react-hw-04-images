import React, { useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';



const Modal = ({ largeImageURL, onClose }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);


   // handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     this.props.onClose();
  //   }
  // };

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }; 

  // handleBackDropClick = e => {
  //   if (e.currentTarget === e.target) {
  //     this.props.onClose();
  //   }
  // };

  return (
    <div className={css.overlay} onClick={handleBackDropClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;



//   render() {
//     const { largeImageURL } = this.props;
//     return (
//       <div className={css.overlay} onClick={this.handleBackDropClick}>
//         <div className={css.modal}>
//           <img src={largeImageURL} alt="" />
//         </div>
//       </div>
//     );
//   }
// }

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   largeImageUrl: PropTypes.string.isRequired,
// };

// export default Modal;
