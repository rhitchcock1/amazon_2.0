import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { Provider as AuthProvider, session } from 'next-auth/react'

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <AuthProvider session={pageProps.session}>
//      <Provider store={store}>
//       <Component {...pageProps} />
//      </Provider>
//     </AuthProvider >
//   )
// }

// export default MyApp 

import { SessionProvider } from "next-auth/react"
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
     <Provider store={store}>
      <Component {...pageProps} />
     </Provider>
    </SessionProvider>
  )
}