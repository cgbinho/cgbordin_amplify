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
    if (!userData) {
      return null;
    }

    const {
      signInUserSession: {
        idToken: { payload },
      },
    } = userData;
    // check if user isAdmin:
    const isAdmin =
      payload['cognito:groups'] && payload['cognito:groups'].includes('Admin');

    const user = formatUser({ isAdmin, ...userData });
    return user;
  } catch (error) {
    return null;
  }
};
