export const formatUser = (userData: any) => {
  const { sub, ...user } = userData.attributes;
  return { id: sub, ...user };
};
