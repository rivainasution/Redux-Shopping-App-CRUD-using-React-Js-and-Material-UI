import { Box, IconButton, Typography } from '@mui/material';
import { IconNext, IconPrev } from '../../../assets/commons';

const Pagination = ({ page, setPage, lastPage }) => {
  const last = [];
  for (let i = 1; i <= lastPage; i++) {
    last.push(i);
  }
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'end'}>
      <Box
        onClick={() => {
          if (page - 1 < 1) {
            setPage(1);
          } else {
            setPage(page - 1);
          }
        }}
        sx={{ cursor: 'pointer' }}
      >
        <IconButton sx={{ p: '0px' }} disabled={page - 1 < 1}>
          <IconPrev />
        </IconButton>
      </Box>
      {last.map((item, idx) => (
        <Box
          p={'6px 8px'}
          borderRadius={'4px'}
          ml={'8px'}
          sx={{
            background: page === item ? '#51B15C' : '#f7f7f7',
            color: page === item ? '#fff' : '#303030',
            cursor: 'pointer',
          }}
          key={idx}
          onClick={() => setPage(item)}
        >
          <Typography
            fontSize={'10px'}
            fontWeight={'700px'}
            letterSpacing={'0.02em'}
            lineHeight={'11px'}
            sx={{ cursor: 'pointer' }}
          >
            {item}
          </Typography>
        </Box>
      ))}
      <IconButton
        sx={{ p: '0px', ml: '8px', cursor: 'pointer' }}
        onClick={() => {
          setPage((prevPage) => {
            const nextPage = prevPage + 1;
            if (nextPage > lastPage) {
              return lastPage;
            }
            return nextPage;
          });
        }}
        disabled={page + 1 > lastPage}
      >
        <IconNext />
      </IconButton>
    </Box>
  );
};

export default Pagination;
