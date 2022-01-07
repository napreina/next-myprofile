import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/css/fontawesome.min.css" rel="stylesheet" />
          <link href="/css/magnific-popup.css" rel="stylesheet" />
          <link href="/css/owl.carousel.min.css" rel="stylesheet" />
          <link href="/css/owl.theme.default.min.css" rel="stylesheet" />
          <link href="/css/animate.css" rel="stylesheet" />
          <link href="/css/flaticon-set.css" rel="stylesheet" />
          <link href="/css/themify-icons.css" rel="stylesheet" />
          <link href="/css/style.css" rel="stylesheet" />
          <link href="/css/responsive.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
