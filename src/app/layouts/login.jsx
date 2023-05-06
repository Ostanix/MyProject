/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useEffect } from 'react';
import TextFeild from '../components/textField';
import { validator } from '../utils/validator';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const handleChange = ({ target }) => {
    setData((prevstate) => ({
      ...prevstate,
      [target.name]: target.value,
    }));
  };

  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения',
      },
      isEmail: {
        massage: 'Email введён не корректно',
      },
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения',
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву',
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число',
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8,
      },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isvalid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          <h3 className='mb-4'>Login</h3>
          <form onSubmit={handleSubmit}>
            <TextFeild
              label='Электронная почта'
              type='text'
              name='email'
              value={data.email}
              onChange={handleChange}
              error={errors.email}
            />
            <TextFeild
              label='Пароль'
              type='password'
              name='password'
              value={data.email}
              onChange={handleChange}
              error={errors.password}
            />
            <button type='button' disabled={!isvalid} className='btn btn-primary w-100 mx-auto'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
