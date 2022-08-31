import Subscribe from 'components/Subscribe';
import Footer from './Footer';
import Header from './Header';
import { MetaHead } from './MetaHead';

export function Layout(props) {
  const { children, date, imageUrl, title, description, ogUrl } = props;

  const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;

  const metaHeadProps = {
    date,
    imageUrl,
    description,
    ogUrl,
    title
  };

  return (
    <div className="h-screen">
      <MetaHead {...metaHeadProps} />
      <Header />
      <div className="pt-10 min-h-full bg-offwhite-1 dark:bg-gradient-to-t from-blue-900 to-blue-800">{children}</div>
      {FORM_ID && API_KEY && <Subscribe />}
      <Footer />
    </div>
  );
}
