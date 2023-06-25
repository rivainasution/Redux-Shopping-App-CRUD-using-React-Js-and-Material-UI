import { InputAdornment, TextField } from '@mui/material';
import debounce from 'lodash/debounce';
import { IconSearch } from '../../../assets/commons';

export default function Search({ placeholder, setSearch, page, setPage }) {
  const handleSearch = debounce((value) => {
    setSearch(value);
  }, 1000); // menunggu 300ms sebelum mengirimkan data pencarian

  const handleChange = (event) => {
    const { value } = event.target;
    handleSearch(value);
  };

  const handleClick = () => {
    if (page !== 1) {
      setPage(1);
    }
  };

  return (
    <TextField
      id="search"
      sx={{
        '.MuiInput-root': {
          backgroundColor: '#f7f7f7',
          borderRadius: '10px',
          borderBottom: '1px solid #f7f7f7',
          height: '34px',
          width: '218px',
        },
        '.MuiInput-root:before': {
          borderBottom: '1px solid transparent',
        },
        '.MuiInput-root:after': {
          borderBottom: '1px solid transparent',
        },
        '.MuiInput-root:hover:not(.Mui-disabled, .Mui-error): before': {
          borderBottom: '1px solid transparent',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end" sx={{ marginRight: '7px' }}>
            <IconSearch />
          </InputAdornment>
        ),
      }}
      variant="standard"
      placeholder={placeholder}
      onClick={handleClick}
      onChange={handleChange} // menjalankan debounce ketika nilai inputan berubah
    />
  );
}
