// from package
import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { setQuestionSelection } from './../../../../redux/reducers/faqSlice';


// styles

const HiddenContentStyle = {
  display: 'none',
  opacity: '0',
  height: '100%',
};

const ShowContainerStyle = {
  padding: '20px',
  width: '80vw',
  maxWidth: '800px',
  opacity: '1',
  height: '100%',
};

const QuestionContainerStyle = {
  backgroundColor: '#5E5D3B',
  padding: '10px 20px',
  margin: '5px',
  width: '100%',
  transition: 'all 2s'
};

const QuestionUpperBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  transition: 'all 2s',
};

const QuestionTextStyle = {
  padding: '10px',
  width: '90%',
  fontSize: '16px',
  textAlign: 'justify',
  color: '#DBDAC9',
  transition: 'all 2s',
};

const IconButtonStyle = {
  width: '8%',
  height: 'auto',
  transition: 'all 2s',
};

const AnswerBoxStyle = {
  backgroundColor: '#DBDAC9',
  margin: '5px',
  padding: '10px',
  transition: 'all 2s',
};

const AnswerTextStyle = {
  color: '#3E3E27',
  textAlign: 'justify',
  fontSize: '16px'
};


// components

const ContentContainer = ({ children }) => {
  // redux
  const categorySelected = useSelector(state => state.faq.categorySelected);
  // render
  return (
    <Box sx={ categorySelected === 'none' ? HiddenContentStyle : ShowContainerStyle }>
      { children }
    </Box>
  );
};

const QuestionUpperBox = ({ item }) => {
  // redux
  const dispatch = useDispatch();
  const questionSelected = useSelector(state => state.faq.questionSelected);
  // function
  const ClickHandler = () => {
    return dispatch(setQuestionSelection(item.question));
  };
  // render
  return (
    <Box sx={ QuestionUpperBoxStyle }>

      <Typography
        sx={ QuestionTextStyle }>
        { item.question }
      </Typography>

      { item.question != questionSelected &&
        <IconButton sx={ IconButtonStyle }
          onClick={ ClickHandler }>
          +
        </IconButton>
      }
    </Box>
  );
};

const AnswerBox = ({ item }) => {
  return (
    <Box sx={ AnswerBoxStyle }>
      <Typography sx={ AnswerTextStyle }>
        { item.answer }
      </Typography>
    </Box >
  );
};

const QuestionContainer = ({ item }) => {
  // redux
  const questionSelected = useSelector(state => state.faq.questionSelected);
  //  render
  return (
    <Box sx={ QuestionContainerStyle }>
      <QuestionUpperBox item={ item } />
      {
        questionSelected === item.question &&
        <AnswerBox item={ item } />
      }
    </Box>
  );
};


// rendering

function FullFAQContent({ data }) {
  // redux
  const categorySelected = useSelector(state => state.faq.categorySelected);
  // render
  return (
    <ContentContainer>
      {
        data.data.data.map(item => {
          if (item.category === categorySelected)
            return (
              <QuestionContainer item={ item } />
            );
        }) }

    </ContentContainer>

  );
}

export default FullFAQContent;
