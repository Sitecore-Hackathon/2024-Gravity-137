import Head from 'next/head';
import Header from 'components/LocationSelector';
/**
 * Rendered in case if we have 404 error
 */
const NotFound = (): JSX.Element => (
  <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div style={{ padding: 10 }}>
      
      <Header/>
    </div>
  </>
);

export default NotFound;
