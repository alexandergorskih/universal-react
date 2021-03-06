/* @flow weak */
import User from '../../users/user';

const mapApiUserToAppUser = apiUser => {
  if (!apiUser) return null;
  // A Firebase User instance keeps track of every provider linked to the user.
  // https://firebase.google.com/docs/auth/users
  // Only Facebook provider is enabled right now.
  const facebookProfile = apiUser.providerData[0];
  return new User({
    displayName: facebookProfile.displayName || facebookProfile.email,
    email: facebookProfile.email,
    id: apiUser.uid,
    photoURL: facebookProfile.photoURL || '',
  });
};

export default mapApiUserToAppUser;
