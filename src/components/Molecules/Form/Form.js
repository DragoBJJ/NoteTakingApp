import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import { Button } from 'components/atoms/Button/Button';
import family from 'assets/images/family.jpeg';
import Input from 'components/atoms/Input/Input';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import * as Yup from 'yup';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #1d1d1d;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled(FormikForm)`
  display: flex;
  background-image: url(${family});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 640px;
  box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  height: 40px;
  width: 180px;
  margin-top: 50px;
  background-color: transparent;
  border: 2px solid #fff;
  transition: all 0.3s ease-in-out;
  color: #dddd;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;

const StyledInput = styled(Input)`
  margin: 20px 0 40px;
  background-color: ${({ invalid }) => (invalid ? 'hsl(0, 72%, 51%)' : '#fff')};
  border: 2px solid ${({ invalid }) => (invalid ? '#1d1d1d' : 'none')};
  opacity: 60%;
  transition: all 0.3s ease-in-out;
  &:focus {
    background-color: #fff;
    opacity: 100%;
  }
`;
const StyledParagraph = styled(Paragraph)`
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  &:hover {
    color: ${({ theme, activeColor }) => theme[activeColor]};
  }
`;
const Link = styled(NavLink)`
  margin-top: 20px;
  text-decoration: none;
`;
const StyledErrorMessage = styled(Paragraph)`
  color: hsl(0, 72%, 51%);
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
`;

const Form = ({ path, authenticate }) => {
  const loginSchema = Yup.object().shape({
    username: Yup.string('It is not String !').min(3, 'To short').required('Is required !'),
    password: Yup.string(8, 'It is not String !')
      .min(8, 'To short !')
      .required('No password provided.'),
  });

  return (
    <Wrapper>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={({ username, password }, { setSubmitting }) => {
          // authenticate(username, password);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <FormWrapper activeColor="red">
            <InputWrapper>
              <StyledInput
                as={Field}
                name="username"
                type="text"
                placeholder="login"
                invalid={errors.username && touched.username}
              />
              <ErrorMessage name="username" component={StyledErrorMessage} />
              <StyledInput
                as={Field}
                name="password"
                type="password"
                placeholder="password"
                invalid={errors.password && touched.password}
              />
            </InputWrapper>
            <ErrorMessage name="password" component={StyledErrorMessage} />

            <StyledButton type="submit" disabled={isSubmitting}>
              {path === 'login' ? 'Register' : 'Login'}
            </StyledButton>

            <Link to="/notes">
              <StyledParagraph activeColor="notes">Lets get out of there, Leon</StyledParagraph>
            </Link>
          </FormWrapper>
        )}
      </Formik>
    </Wrapper>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   authenticate: (username, password) => dispatch(auth(username, password)),
// });

export default connect(null, null)(Form);
