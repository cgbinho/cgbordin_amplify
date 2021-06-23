import { Amplify, withSSRContext } from 'aws-amplify';
import { formatUser } from './user';

export const getCurrentAuthenticatedUser = async (req) => {
  const { Auth } = withSSRContext({ req });

  try {
    const userData = await Auth.currentAuthenticatedUser();
    const user = formatUser(userData);
    return user;
  } catch (error) {
    return null;
  }
};
