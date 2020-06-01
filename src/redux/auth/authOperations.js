import { auth } from '../../firesbase/config';

export const signInUser = () => ({ email, password }) => async (
  dispatch,
  getState
) => {
  console.log('object');
  try {
    const authentication = await auth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    console.log(authentication);
  } catch {}
};

// export const signUpUser = ({ email, password, displayName }) => async (
//   dispatch,
//   getState
// ) => {
//   try {
//     const user = await auth.createUserWithEmailAndPassword(email, password);
//     const update = auth.currentUser;
//     await update.updateProfile({
//       displayName: displayName,
//       photoURL: 'https://example.com/jane-q-user/profile.jpg',
//     });
//   } catch (err) {
//     console.log(err.code);
//     console.log(err.message);
//   }
// };
