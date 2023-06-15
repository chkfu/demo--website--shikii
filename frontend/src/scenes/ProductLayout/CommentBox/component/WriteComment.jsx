// from package
import React, { useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { setRate, setComment } from '../../../../../redux/reducers/pageLayoutSlice';


// styles

const AddCommentContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  m: '10px 5%',
  p: '20px 40px',
  backgroundColor: '#CDCBBE',
  height: '100%',
  boxShadow: 2
};

const AddCommentHeaderStyle = {
  padding: '10px 0',
  textAlign: 'left'
};

const RatingContainerStyle = {
  display: 'flex',
  alignItems: 'center'
};

const RatingListStyle = {
  display: 'flex',
  alignItems: 'center',
  marginLeft: '15px'
};

const ActiveStarStyle = {
  padding: '3px',
  color: '#f59f00',
  fontSize: '16px',
  cursor: 'pointer'
};

const InactiveStarStyle = {
  padding: '3px',
  color: '#666666',
  fontSize: '16px',
  cursor: 'pointer'
};

const RatingNumStyle = {
  marginLeft: '15px',
  fontSize: '16px',
  color: '#666666'
};

const LabelStyle = {
  textAlign: 'left',
  float: 'left',
  fontSize: '16px'
};

const textAreaStyle = {
  width: '100%',
  height: '58px',
  padding: '10px',
  textAlign: 'left',
  verticalAlign: 'top',
  fontSize: '14px'
};

const BtnSectionStyle = {
  display: 'flex',
  margin: '10px 0'
};

const BtnStyle = {
  marginRight: '10px',
  padding: '5px 15px',
  fontSize: '16px',
  cursor: 'pointer',
  border: 'none',
  color: 'white',
  backgroundColor: '#49453F'
};



// components

const AddCommentContainer = ({ children }) => {
  return (
    <Box sx={ AddCommentContainerStyle }>
      { children }
    </Box>
  );
};

const AddCommentHeader = () => {
  return (
    <div style={ AddCommentHeaderStyle }>
      Add Review
    </div>
  );
};

const RatingSection = ({ ratingArr }) => {
  // redux
  const rate = useSelector(state => state.layout.rate);
  const dispatch = useDispatch();
  // render
  return (
    <div style={ RatingContainerStyle }>

      {/* Label */ }
      <p style={ LabelStyle }>
        Rating:
      </p>

      {/* rating list */ }
      <div style={ RatingListStyle }>
        {/* detect selected stars / non-selected stars, and print */ }
        { ratingArr.map((item, index) => {
          return rate >= item ?
            <span
              key={ index }
              data-value={ index + 1 }
              style={ ActiveStarStyle }
              onClick={ (event) => dispatch(setRate(event.target.dataset.value)) }>
              &#9733;
            </span> :
            <span
              key={ index }
              data-value={ index + 1 }
              style={ InactiveStarStyle }
              onClick={ (event) => dispatch(setRate(event.target.dataset.value)) } >
              &#9734;
            </span>;
        }) }
        <p style={ RatingNumStyle }>
          { Number(rate).toFixed(1) }
        </p>
      </div>
    </div>
  );
};


const CommentTextForm = ({ id }) => {
  // redux
  const comment = useSelector(state => state.layout.comment);
  const dispatch = useDispatch();
  // render
  return (
    <>
      <label htmlFor='comment' style={ LabelStyle }>
        Comment:
      </label>

      <textarea
        style={ textAreaStyle }
        rows="4"
        cols="50"
        id='comment'
        name='comment'
        value={ comment }
        onChange={ (event) => dispatch(setComment(event.target.value)) }>
      </textarea>

      <ButtonSection id={ id } />
    </>
  );
};


const ButtonSection = ({ id }) => {

  // redux
  const rate = useSelector(state => state.layout.rate);
  const comment = useSelector(state => state.layout.comment);
  const dispatch = useDispatch();

  // function
  const SubmitHandler = async () => {
    return await axios.post(`http://127.0.0.1:3002/api/v1/products/${id}/reviews`, {
      rating: rate,
      review: comment
    }, {
      credentials: true, withCredentials: 'include'
    });
  };
  const ResetHandler = (event) => {
    event.preventDefault();
    dispatch(setRate(0));
    dispatch(setComment(""));
  };

  // render
  return (
    <div style={ BtnSectionStyle }
    >
      <button
        style={ BtnStyle }
        onClick={ SubmitHandler }>
        Submit
      </button>
      <button
        style={ BtnStyle }
        onClick={ ResetHandler }>
        Reset
      </button>
    </div >
  );
};


// rendering

function WriteComment({ id }) {
  // declaration
  const ratingArr = [1, 2, 3, 4, 5];
  // state management
  const [rate, setRate] = useState(3);
  const [comment, setComment] = useState('');

  return (
    <AddCommentContainer>
      <form>
        <AddCommentHeader />
        <RatingSection ratingArr={ ratingArr } />
        <CommentTextForm id={ id } />
      </form>
    </AddCommentContainer>
  );
};

export default WriteComment;
