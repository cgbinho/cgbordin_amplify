import { Amplify, withSSRContext } from 'aws-amplify';

export const formatUser = (userData: any) => {
  const { isAdmin } = userData;
  const { sub, ...user } = userData.attributes;
  return { id: sub, isAdmin, ...user };
};

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
