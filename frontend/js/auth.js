
// Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyDas2mZGWeyDtYBguLXKwce9HoGYi7HkZw",
    authDomain: "petential-c3f28.firebaseapp.com",
projectId: "petential-c3f28",
storageBucket: "petential-c3f28.appspot.com",
messagingSenderId: "885089911639",
appId: "1:885089911639:web:b10eb61a953c8e48843412"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      const auth = firebase.auth();

      function signUp() {
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        alert("signed Up")
      

      }

      function signIn() {
        const email = document.getElementById("email2");
        const password = document.getElementById("password2");
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));
        alert("signed Up" + email2.value);
        window.location ="/home";
      }

      function signOut() {
        auth.signOut();
        alert("signing out")
        window.location ="/";
      }

      auth.onAuthStateChanged(function(user){

        if(user) {
          const email = user.email;
          alert("Active User " + email);
          //is signed in
        }else{
          console.log("No Active User");
          //no user is signed in
        }
      })