import { sixFeatures } from './components/data/sixFeatures';
import { Features } from './components/features/Features';
import { FeaturesBigOne } from './components/featuresBigOne/FeatureBigOne';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/Hero';
import { Sponsors } from './components/sponsors/Sponsors';

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Sponsors />
        <FeaturesBigOne data={sixFeatures}/>
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}

export default App
