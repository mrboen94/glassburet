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
      <Html
        lang="no"
        className="h-full scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-blue-300 overflow-y-scroll hover:scrollbar-thumb-green-400"
      >
        <Head>
          <link rel="canonical" href="https://glassburet.netlify.app/" />
          <link rel="icon" href="/gb.svg" />
          <meta
            name="description"
            content="Scheduling is hard, so we made it easy, but horrible at the same time!"
          />
          <meta
            property="og:description"
            content="Scheduling is hard, so we made it easy, but horrible at the same time!"
          />
        </Head>
        <body className="h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
