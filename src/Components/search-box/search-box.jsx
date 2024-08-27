import './searchStyle.css';

const SearchBox = ({ placeholder, onChangeHandler }) => (
  <input className='search-box'
  onChange={onChangeHandler}
    placeholder={placeholder}
  />
);

export default SearchBox;