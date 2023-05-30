import { Formik, Form, Field } from "formik";
import React from "react";
import { Fields } from "components";
import { signIn } from "store/auth";
import { Button } from "antd";
import { SignUserAvatar } from 'assets/images/png'
import axios from "axios";
import { useDispatch } from "react-redux";
import { get } from 'lodash'
import { useNavigate } from "react-router-dom";
const { VITE_API_ROOT } = import.meta.env;



const index = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const registerHandler = (values, resetForm) => {
    axios.post('https://blogsiteuchun.pythonanywhere.com/register', values)
      .then((data) => {
        console.log(data)
        dispatch(signIn(get(data, 'data.data')))
        navigate('/')
      })
    resetForm()
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-sky-400">
      <div className="w-1/3 shadow-md p-4 rounded-md bg-white">
        <Formik
          initialValues={{
            username: "",
            first_name: "",
            last_name: "",
            phone_number: "",
            password: "",
            // status: 1,
          }}
          onSubmit={(data) => {
            // signIn(data);
          }}
        >
          {({ values, resetForm }) => {
            return (
              <Form>
                <div className='text-center'>
                  <img src={SignUserAvatar} className="sign-user-avatar" />
                  <h4>Register</h4>
                </div>
                <Field
                  name="username"
                  label="User name"
                  component={Fields.Input}
                />
                <Field
                  name="first_name"
                  label="First name"
                  component={Fields.Input}
                />
                <Field
                  name="last_name"
                  label="Last name"
                  component={Fields.Input}
                />
                <Field
                  name="phone_number"
                  label="Phone number"
                  component={Fields.Input}
                />
                <Field
                  name="password"
                  label="Password"
                  component={Fields.Input}
                />
                <div className="flex gap-5 my-3">
                  <Button
                    type="primary"
                    onClick={() => registerHandler(values, resetForm)}
                  >
                    Submit
                  </Button>
                  <button
                    className="btn btn-outline-success mx-3"
                    onClick={() => navigate('/auth/sign-in')}
                  >
                    Do you have an accaunt?
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default index;
