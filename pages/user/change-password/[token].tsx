import React from 'react'
import { Formik, Field } from 'formik'
import Router from 'next/router'

import Layout from '../../../components/Layout';
import { ChangePasswordComponent } from '../../../generated/apolloComponents';
import { InputField } from '../../../components/fields/inputField';
import { NextPageContext } from 'next';

const ChangePassword = ({ token }: { token: string }) => {
  return (
    <Layout title="Change Password page">
      <ChangePasswordComponent>
        {changePassword => (
          <Formik
            onSubmit={async data => {
              const response = await changePassword({
                variables: {
                  data: {
                    password: data.password,
                    token
                  }
                }
              });
              console.log(response)
              Router.push("/")
            }}
            initialValues={{ password: "" }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">Change Password</button>
              </form>
            )}
          </Formik>
        )}
      </ChangePasswordComponent>
    </Layout >
  );
}
// getting token from url and adding to props
ChangePassword.getInitialProps = ({
  query: { token }
}: NextPageContext) => {
  return {
    token
  }
}

export default ChangePassword