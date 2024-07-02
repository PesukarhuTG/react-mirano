import {
  Header,
  Hero,
  Filter,
  Goods,
  Subscribe,
  Footer,
  Order,
} from './modules';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Filter />
        <Goods />
        <Subscribe />
      </main>
      <Footer />
      <Order />
    </>
  );
};
