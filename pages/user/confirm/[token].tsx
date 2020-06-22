import { PureComponent } from 'react'
import { MyContext } from '../../../interfaces/MyContext';
import { ConfirmUserMutation, ConfirmUserMutationVariables } from '../../../generated/apolloComponents';
import { confirmUserMutation } from '../../../graphql/user/mutations/confirmUser';
import { Redirect } from '../../../lib/redirect';


export default class Confirm extends PureComponent {
  static async getInitialProps({ query: { token }, apolloClient, ...ctx }: MyContext) {
    if (!token) {
      return {}
    };
    await apolloClient.mutate<ConfirmUserMutation, ConfirmUserMutationVariables>({
      mutation: confirmUserMutation,
      variables: {
        token: token as string
      }
    });

    Redirect(ctx, "/login");

    return {}
  }
  render() {
    return "something went wrong"
  }
}