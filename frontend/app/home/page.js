// app/home/page.js
import Header from './components/Header';
import Features from './components/Features';
import Introduction from './components/Introduction';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQSection from './components/FAQSection';

const HomePage = () => (
  <>
    <Header />
    <Features />
    <Introduction />
    <Testimonials />
    <Pricing />
    <FAQSection />
  </>
);

export default HomePage;
