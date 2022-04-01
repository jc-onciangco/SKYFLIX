import '../styles/globals.css'
import {Provider}  from 'react-redux'
import store from '../src/store/store.js'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <style jsx global>{`
        
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-size: 16px;
          }

          ul {
            list-style: none;
          }

          a {
            text-decoration: none;
          }

          :root {
            --containerWidth: 1rem;
            /* App Color (NORMAL MODE) */
            --primaryColor: #FFFFFF;
            --accentColor: #4B98FE;
          }

        `}</style>
    </Provider>
  )
}

export default MyApp
