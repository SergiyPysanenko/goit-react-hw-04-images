import React, { useState} from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';


function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  // class Searchbar extends Component {
  //   state = {
  //     searchQuery: '',
  //   };

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Please enter something :)');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchform}>
        <button type="submit" className={css.button}>
          <span>
            <FiSearch size={25} stroke="#3f51b5" />
          </span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form onSubmit={this.handleSubmit} className={css.searchform}>
//           <button type="submit" className={css.button}>
//             <span>
//               <FiSearch size={25} stroke="#3f51b5" />
//             </span>
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             name="searchQuery"
//             value={this.state.searchQuery}
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

// export default Searchbar;
