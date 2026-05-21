import Navbar from "./component/Navbar.jsx";
import Footer from "./component/footer.jsx";
import Card from "./component/card.jsx";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="cardContainer">
          <Card title="card 1" description="card 1 description" />
          <Card title="card 1" description="card 1 description" />
          <Card title="card 2" description="card 2 description" />
          <Card title="card 3" description="card 3 description" />
          <Card title="card 4" description="card 4 description" />

        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
