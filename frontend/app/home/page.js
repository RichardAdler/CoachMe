// app/home/page.js
import Header from './components/Header';
import Features from './components/Features';
import Introduction from './components/Introduction';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQSection from './components/FAQSection';
import Subscribe from './components/Subscribe';

const HomePage = () => (
  <>
    <div id="home"><Header /></div>
    <div id="features"><Features /></div>
    <div id="introduction"><Introduction /></div>
    <div id="testimonials"><Testimonials /></div>
    <div id="pricing"><Pricing /></div>
    <div id="faq"><FAQSection /></div>
    <div id="subscribe"><Subscribe /></div>    
  </>
);

export default HomePage;
