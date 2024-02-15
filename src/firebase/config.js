import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIP2rVCME7DYH3AdASxY6bq8rhVZ9BcY4",
  authDomain: "blog-vue3-860a5.firebaseapp.com",
  projectId: "blog-vue3-860a5",
  storageBucket: "blog-vue3-860a5.appspot.com",
  messagingSenderId: "727981944028",
  appId: "1:727981944028:web:b3a3d8a51c92b90f0dd819"
};

const fb = initializeApp(firebaseConfig);

export {fb};