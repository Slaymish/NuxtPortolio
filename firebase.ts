import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getPerformance } from 'firebase/performance'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyATmqL10OsaaZmqgxoF8TH3-ylj01VOVMQ',
  authDomain: 'test-7e9fa.firebaseapp.com',
  projectId: 'test-7e9fa',
  storageBucket: 'test-7e9fa.appspot.com',
  messagingSenderId: '665990196673',
  appId: '1:665990196673:web:3c6614ecbc957cb10a5340',
  measurementId: 'G-EZ3SLW3XW3'
});

let analytics;
let performance; // Add this line

if(process.client) {
  analytics = getAnalytics(firebaseApp);
  performance = getPerformance(firebaseApp); // Add this line
}