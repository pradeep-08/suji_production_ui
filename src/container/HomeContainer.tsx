import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import ChatBot from '../components/Chatbot';

// Lazy load page components to split the production bundle
const Hero = lazy(() => import('../components/Hero'));
const About = lazy(() => import('../components/About'));
const Services = lazy(() => import('../components/Services'));
const Gallery = lazy(() => import('../components/Gallery'));
const Contact = lazy(() => import('../components/Contact'));
const Privacy = lazy(() => import('../components/Privacy'));
const NotFound = lazy(() => import('../components/NotFound'));
const ServiceDetail = lazy(() => import('../components/ServiceDetail'));

export default function HomeContainer() {
    return (
        <Router>
            <Navbar />
            <ChatBot />
            <Suspense fallback={
                <div className="flex items-center justify-center min-h-[60vh] bg-white text-bridal-brown">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-bridal-rose"></div>
                </div>
            }>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy" element={<Privacy />} />
                    
                    {/* Dedicated SEO Service Pages */}
                    <Route path="/bridal-makeup-artist-chennai" element={<ServiceDetail />} />
                    <Route path="/hd-bridal-makeup-chennai" element={<ServiceDetail />} />
                    <Route path="/airbrush-makeup-chennai" element={<ServiceDetail />} />
                    <Route path="/engagement-makeup-chennai" element={<ServiceDetail />} />
                    <Route path="/reception-makeup-chennai" element={<ServiceDetail />} />
                    <Route path="/party-makeup-artist-chennai" element={<ServiceDetail />} />
                    <Route path="/hairstyling-saree-draping-chennai" element={<ServiceDetail />} />
                    <Route path="/home-service-bridal-makeup-chennai" element={<ServiceDetail />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    );
}