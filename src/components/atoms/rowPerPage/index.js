import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';

const RowPerPage = ({ setPageSize, pageSize, setPage }) => {
  const data = [10, 15, 20, 25, 30];
  const handleChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };
  return (
    <Box
      marginRight={'30px'}
      display={'flex'}
      fontFamily={'sans-serif'}
      fontStyle={'normal'}
      fontWeight={400}
      fontSize={12}
      lineHeight={'14px'}
      letterSpacing={'0.02em'}
    >
      <Typography mr={'10px'}>Show</Typography>
      <Box display={'flex'} justifyContent={'center'}>
        <FormControl>
          <Select
            value={pageSize}
            onChange={handleChange}
            sx={{
              height: '30px',
              '.MuiSelect-root': {},
            }}
          >
            {data &&
              data.map((item, idx) => (
                <MenuItem value={item} key={idx}>
                  <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    {item}
                  </Box>
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <Typography ml={'10px'}>entries</Typography>
    </Box>
  );
};

export default RowPerPage;
