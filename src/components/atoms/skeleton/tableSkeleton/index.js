import { Skeleton } from '@mui/material';

function TableSkeleton({ col }) {
  return (
    <tbody>
      {Array.from(Array(5)).map((_, index) => (
        <tr key={index}>
          {Array.from(Array(col)).map((_, index) => (
            <td key={index}>
              <Skeleton variant="text" width={100} height={20} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableSkeleton;
