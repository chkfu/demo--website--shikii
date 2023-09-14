// from package
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
// from files
import PanelContainer from './components/PanelContainer';
import { BACKEND_ROUTE } from '../../theme/api-links';

// style

const PageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  padding: '60px'
};

// rendering

function index() {

  // data fetching
  const { data, isLoading, isError, refetch } = useQuery('user-data-fetching', async () => {

    console.log(data);

    return await axios.get(`${BACKEND_ROUTE}/api/v1/users/get-current-user`, {
      credentials: 'include',
      withCredentials: true
    });
  });
  if (isLoading) return <></>;
  if (isError) return <></>;
  if (!data) return <></>;

  // render
  return (
    <div style={ PageContainerStyle }>
      <PanelContainer data={ data } refetch={ refetch } />
    </div>
  );
}

export default index;;
