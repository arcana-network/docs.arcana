```js title="App.vue" hl_lines="3 25-28"
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthProvider, BearerAuthentication } from '@arcana/auth'

const config = {
  apiKey: 'API_KEY', // Obtain this after registering app at Firebase console
  authDomain: 'PROJECT_ID.firebaseapp.com', // Project ID Domain setting in the Firebase console
};

const firebaseApp = initializeApp(config)
const firebaseAuth = getAuth(firebaseApp)

//Create Arcana Auth Provider
const auth = new AuthProvider("xar_live_123940ytyoxxxxxxx343o404") // Get client ID from Arcana Developer Dashboard

export default {
  name: 'App',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async ultimate (upm) {
        await auth.init()  // Initialize Arcana Auth
        await auth.loginWithBearer(BearerAuthentication.firebase, {
        uid: upm.user.uid,
        token: upm.user.accessToken
        })
    },
    async login () { //Sign in existing Firebase users
        const data = await signInWithEmailAndPassword(firebaseAuth, this.email, this.password)
        console.log('Data:', data)
        return this.ultimate(data)
    },
    async register () {  //Sign up new users with Firebase Auth
        const data = await createUserWithEmailAndPassword(firebaseAuth, this.email, this.password)
        console.log('Data:', data)
        return this.ultimate(data)
    }  
  }
}

...
```
