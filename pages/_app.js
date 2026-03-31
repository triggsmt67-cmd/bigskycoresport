import "@/styles/globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default function App({ Component, pageProps }) {
  return (
    <div className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased text-brand-black bg-white`}>
      <Component {...pageProps} />
    </div>
  );
}
