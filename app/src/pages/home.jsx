// Project files
import Header from "../components/header";
import Card from "../components/card";
import Information from "../data/Information.json";

export default function Home() {
  // Components
  const CardsArray = Information.map((item) => (
    <Card key={item.id} information={item} />
  ));

  return (
    <div id="home">
      {/* Header */}
      <Header />

      {/* Content with cards */}
      <section className="container">
        <h1>Recommended videos</h1>

        <div className="grid">{CardsArray}</div>
      </section>
    </div>
  );
}
