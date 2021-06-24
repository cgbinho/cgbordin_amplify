export const formatUser = (userData: any) => {
  const { isAdmin } = userData;
  const { sub, ...user } = userData.attributes;
  return { id: sub, isAdmin, ...user };
};
