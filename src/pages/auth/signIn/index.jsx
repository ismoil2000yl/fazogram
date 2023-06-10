import { Formik, Form, Field } from 'formik'
import React from 'react'
import { SignUserAvatar } from 'assets/images/png'
import { signIn } from 'store/auth'
import { Fields } from 'components'
import { Button, notification } from 'antd'
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { get } from 'lodash'
import storage from 'services/storage'

const index = () => {
  const selector = useSelector((state) => state);
  const navigate = useNavigate()
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch()

  const validate = Yup.object({
    username: Yup.string()
      .max(15, 'Xarflar soni 15 dan oshmasin...!')
      .required("Username kiritilmagan...!"),
    password: Yup.string()
      .min(6, "Parol uzunligi 6 ta dan ko'p bo'lsin...!")
      .required("Parol kiritilmagan...!"),
  })

  const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post(
        "https://blogsiteuchun.pythonanywhere.com/user/login",
        newTodo
      );
    },
    onSuccess: (data) => {
      console.log(data)
      storage.set("token", get(data, "data.token"))
      // storage.set('userId', get(data, 'data.user.id'))
      navigate("/");
      dispatch(signIn(get(data, "data")));
    },
  });

  return (
    <div className='w-screen h-screen flex items-center justify-center bg-sky-400'>
      <div className='w-1/3 shadow-md p-5 rounded-md bg-white'>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          onSubmit={(data) => {
            signIn(data)
          }}
          onError={()=>{
            notification.error({
              message: "Login yoki parol noto'g'ri",
            });
          }}
          validationSchema={validate}
        >
          {({ values, setFieldValue }) => {
            return (
              <Form>
                {contextHolder}
                <div className='text-center'>
                  <img src={SignUserAvatar} className="sign-user-avatar" />
                  <h3 className='my-2'>Login</h3>
                </div>
                <Field
                  name='username'
                  label='User name'
                  component={Fields.Input}
                />
                <Field
                  name='password'
                  label='Password'
                  component={Fields.Input}
                />
                <div className="flex gap-5 my-3">
                  <Button
                    size='large'
                    type='primary'
                    onClick={() => mutation.mutate(values)}
                  >
                    Login
                  </Button>
                  <button
                    className='btn btn-outline-success mx-3'
                    onClick={() => navigate('/auth/registration')}
                  >
                    Registration
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  )
}

export default index