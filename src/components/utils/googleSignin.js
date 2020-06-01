import { firebaseApp, googleProvider } from "../utils/firebase";

export const googleRegister = (promptUserForPassword) => {
  firebaseApp
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      if (error.code === "auth/account-exists-with-different-credential") {
        const pendingCred = error.credential;
        const email = error.email;
        firebaseApp.fetchSignInMethodsForEmail(email).then((methods) => {
          if (methods[0] === "password") {
            const password = promptUserForPassword();
            firebaseApp
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((user) => {
                return user.linkWithCredential(pendingCred);
              })
              .then(() => {
                console.log("logged in");
              });
            return;
          }
        });
      }
    });
};
