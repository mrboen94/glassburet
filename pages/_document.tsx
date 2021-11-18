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
      <Html lang="no" className="h-full">
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
