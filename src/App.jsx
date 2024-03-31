import {
  Footer,
  Hero,
  Popular,
  Services,
  SpecialOffer,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return (
    //relative means default position to the document
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Popular />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>

      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
