import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { Layout } from "../components/Layout";

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
          <meta name="description" content="When to we do this?" />
          <meta property="og:description" content="When to we do this?" />
        </Head>
        <body className="h-full">
          <Layout>
            <Main />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
