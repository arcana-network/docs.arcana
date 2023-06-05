```js title="App.vue" hl_lines="3 5-13 30-32 35-43"
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { AuthProvider, BearerAuthentication } from '@arcana/auth'

const config = {
  apiKey: "AIzaSyBddysLWM9CcpNEVLbUz52YwyQL_uytQX0", // Obtain this after registering app at Firebase console
  authDomain: "arc4n4-docx.firebaseapp.com", // Project ID Domain setting in the Firebase console
  projectId: "some-projectid-example-arc4n4-docx",
  storageBucket: "some-storage-arc4n4-docx.appspot.com",
  messagingSenderId: "2xxxx318486297382",
  appId: "4:3184ddddddd7382:web:8b639axxxxxxxx39f85fe7",
  measurementId: "G-EGccccccLDR"
};

const firebaseApp = initializeApp(config)
const firebaseAuth = getAuth(firebaseApp)

//Create Arcana Auth Provider
// Get client ID 'xar_live_xxxxxx' from Arcana Developer Dashboard

const auth = new AuthProvider("xar_live_123940ytyoxxxxxxx343o404",{
  network: "mainnet", //change it to testnet or mainnet
}) 
export default {
  name: 'App',
  data: () => ({
    email: '',
    password: ''
  }),
  mounted () {
    AP.init().then((k) => console.log(k)).catch(e => console.error(e)) //Initialize the Auth Provider
  },
  methods: {
    async ultimate (upm) {
        if (await AP.isLoggedIn()) {
          window.alert('Already logged in')
          return
        }
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
