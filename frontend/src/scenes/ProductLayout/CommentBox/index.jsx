// from package
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import SubSectionContainer from '../reusable/SubSectionContainer';
import WriteComment from './component/WriteComment';
import ResultStatement from './component/ResultStatement';
import ResultDisplay from './component/ResultDisplay';


// rendering

function CommentBox({ id }) {

  // data fetching
  const { data, isLoading, isError } = useQuery('comment-fetching', async () => {
    return await axios.get(`http://127.0.0.1:3002/api/v1/products/${id}/reviews`,
      {
        credentials: true,
        withCredentials: 'include'
      });
  });
  if (isLoading) return <></>;
  if (isError) return <></>;
  if (!data) return <></>;

  // function
  const CommentBoxExistence = () => {
    // check if user login
    const currUser = localStorage.getItem('userId');
    // check if previous comment from user
    const currUserFilter = data.data.data.filter(item => item.user._id === currUser);
    // return false, comment box disappear
    return currUser && currUserFilter.length > 0;
  };

  // render
  return (
    <SubSectionContainer title='Comments'>
      <ResultStatement data={ data } />
      { CommentBoxExistence() === false && <WriteComment data={ data } id={ id } /> }
      <ResultDisplay data={ data } />
    </SubSectionContainer >
  );
}

export default CommentBox;



