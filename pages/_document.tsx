import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Paint.o.mania, gallery of all my art works."
          />
          <link rel="icon" href="/favicon.ico" />
          {/* <link
            href={
              "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap"
            }
            rel="stylesheet"
          /> */}
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
