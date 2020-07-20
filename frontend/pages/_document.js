import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


//---this is not needed cos we dont want all pages to render SSR   
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (

      <Html lang="en">
        <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
         rel="stylesheet" 
         href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
         />
        </Head>
        <body>
          {/* will Add our JQuery ---Here------ */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument