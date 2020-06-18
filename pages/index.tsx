import Link from 'next/link'
import Layout from '../components/Layout'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p><Link href="/about"><a>About</a></Link></p>
    <Mutation mutation={gql`
      mutation {
        login(email:"jj@jj.com", password: "password") {
          id
          firstName
          lastName
          email
          name
        }
      }
    `}>{(mutate:any) => <button onClick={ async () => {
        const response = await mutate();
        console.log(response);
    }}>call login mutation</button>}
    </Mutation>
  </Layout>
)

export default IndexPage
