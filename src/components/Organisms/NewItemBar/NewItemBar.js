import React from 'react';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import LeonAndMathilda from 'assets/images/LeonAndMathilda.png';
import { addItem as addItemActions } from 'Redux/Actions';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import * as Yup from 'yup';

const Wrapper = styled.div`
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 100px 100px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-image: url(${LeonAndMathilda});
  background-size: cover;
  background-position: center;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0%' : '100%')});
  transition: transform 1s ease-in-out;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin-top: 40px;
  background-color: ${({ invalid }) => (invalid ? 'hsl(0, 72%, 51%)' : 'transparent')};
  border: 2px solid ${({ theme, activeColor }) => theme[activeColor]};
  color: #1d1d1d;
  transition: all 0.3s ease-in-out;

  &:focus {
    background-color: #fff;
  }
`;

const StyledTextArea = styled(Input)`
  background-color: ${({ invalid }) => (invalid ? 'hsl(0, 72%, 51%)' : 'transparent')};
  color: #1d1d1d;
  border: 2px solid ${({ theme, activeColor }) => theme[activeColor]};
  border-radius: 20px;
  margin: 30px 0 60px;
  width: 400px;
  height: 200px;
  resize: none;
  outline: none;
  font-size: 25px;
  transition: all 0.3s ease-in-out;

  &:focus {
    background-color: #fff;
  }
`;

const StyledButton = styled(Button)`
  background-color: #fff;
  border: 1px solid ${({ activeColor, theme }) => theme[activeColor]};
  transition: all 0.3s ease-in-out;
  color: ${({ activeColor, theme }) => theme[activeColor]};
  height: 50px;

  &:hover {
    color: #fff;
    background-color: ${({ activeColor, theme }) => theme[activeColor]};
  }
`;

const StyledErrorMessage = styled(Paragraph)`
  color: hsl(0, 72%, 51%);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleVisible }) => {
  const AddItemSchema = Yup.object().shape({
    title: Yup.string().min(2, 'To Short!').max(30, 'To Long!').required('Is required!'),
    content: Yup.string().min(2, 'To Short!').max(200, 'To Long!').required('Is required !'),
    articleUrl: Yup.string().min(2, 'To Short!').max(30, 'To Long!'),
    twitterName: Yup.string().min(2, 'To Short!').max(20, 'To Long!'),
  });

  return (
    <Wrapper isVisible={isVisible} activeColor={pageContext}>
      <Formik
        initialValues={{
          title: '',
          content: '',
          articleUrl: '',
          twitterName: '',
        }}
        validationSchema={AddItemSchema}
        onSubmit={(values, { setSubmitting }) => {
          addItem(pageContext, values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isValid, isSubmitting }) => (
          <StyledForm>
            <StyledInput
              as={Field}
              type="text"
              name="title"
              activeColor={pageContext}
              placeholder="title"
              invalid={errors.title && touched.title}
            />
            <ErrorMessage name="title" component={StyledErrorMessage} />

            {pageContext === 'twitters' && (
              <StyledInput
                as={Field}
                type="text"
                name="twitterName"
                activeColor={pageContext}
                placeholder="twitterName"
                invalid={errors.twitterName && touched.twitterName}
              />
            )}
            <ErrorMessage name="twitterName" component={StyledErrorMessage} />
            {pageContext === 'articles' && (
              <StyledInput
                as={Field}
                type="text"
                name="articleUrl"
                activeColor={pageContext}
                placeholder="link"
                invalid={errors.articleUrl && touched.articleUrl}
              />
            )}
            <ErrorMessage name="articleUrl" component={StyledErrorMessage} />

            <StyledTextArea
              as={Field}
              component="textarea"
              name="content"
              activeColor={pageContext}
              placeholder="content"
              invalid={errors.content && touched.content}
            />
            <ErrorMessage name="content" component={StyledErrorMessage} />

            <StyledButton
              onClick={isValid && handleVisible}
              type="submit"
              disabled={isSubmitting}
              activeColor={pageContext}
            >
              Add Note
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, content) => dispatch(addItemActions(itemType, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
