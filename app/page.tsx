import Hero from "./components/Hero";
import Problem from "./components/Problem";
import About from "./components/About";
import Value from "./components/Value";
import Programs from "./components/Programs";
import CompanyPartnership from "./components/CompanyPartnership";
import Flow from "./components/Flow";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <About />
      <Value />
      <Programs />
      <CompanyPartnership />
      <Flow />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
