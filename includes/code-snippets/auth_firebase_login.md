```js title="App.vue" hl_lines="2 23"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthProvider, BearerAuthentication } from '@arcana/auth'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const config = {
  apiKey: 'API_KEY',
  authDomain: 'PROJECT_ID.firebaseapp.com',
};

const firebaseApp = initializeApp(config)
const firebaseAuth = getAuth(firebaseApp)
const auth = new AuthProvider("xar_live_123940ytyoxxxxxxx343o404") // client ID for the app registered with Arcana Network

export default {
  name: 'App',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async ultimate (upm) {
      await auth.init()  // if already initialized during integration with Auth SDK, skip this
      await auth.loginWithBearer(BearerAuthentication.firebase, {
        uid: upm.user.uid,
        token: upm.user.accessToken
      })
    },

    async login () {
      const data = await signInWithEmailAndPassword(firebaseAuth, this.email, this.password)
      console.log('Data:', data)
      return this.ultimate(data)
    },
    async register () {
      const data = await createUserWithEmailAndPassword(firebaseAuth, this.email, this.password)
      console.log('Data:', data)
      return this.ultimate(data)
    }
  }
}

...
```
