import { MyContext } from "../interfaces/MyContext";
import { logoutMutation } from "../graphql/user/mutations/logout";
import redirect from "../lib/redirect";

const Logout = () => {
  return null
}

Logout.getInitialProps = ({ apolloClient, ...ctx }: MyContext) => {
  apolloClient.mutate({ mutation: logoutMutation })
  apolloClient.resetStore();
  redirect(ctx, "/login")
  return {}
}

export default Logout;