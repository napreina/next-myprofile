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
        </Head>
        <body id="bdy" className="scroll-style">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
