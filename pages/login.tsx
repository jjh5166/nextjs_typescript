import React from 'react'
import Layout from '../components/Layout'
import { Formik, Field } from 'formik'
import { InputField } from '../components/fields/inputField'
import { LoginComponent, MeQuery } from '../generated/apolloComponents'
import Router from 'next/router'
import { meQuery } from '../graphql/user/queries/me'

export default () => {
  return (
    <Layout title="Login page">
      <LoginComponent>
        {login => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
              const response = await login({
                variables: data,
                update: (cache, { data }) => {
                  if (!data || !data.login) {
                    return
                  }
                  cache.writeQuery<MeQuery>({
                    query: meQuery,
                    data: {
                      me: data.login
                    }
                  })
                }
              })
              console.log(response)
              if (response && response.data && !response.data.login) {
                setErrors({ email: "invalid login" });
                return;
              }
              Router.push("/")
            }}
            initialValues={{
              email: "",
              password: "",
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="email"
                  placeholder="email"
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  component={InputField}
                />
                <button type="submit">submit</button>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
}