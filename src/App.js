import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Link_section from "./components/Link_section";
import Left_picture from "./components/Left_picture";
import Right_picture from "./components/Right_picture";
import PriceSection from "./components/PriceSection";
import PictureSection from "./components/PictureSection";
import Footer from "./components/Footer";

function App() {
  const infoGym = [
    "Велика кількість тренажерів",
    "Площа клубу 1100кв/м2",
    "Просторі роздягальні",
  ];
  const massage = ["Найкращі майстри", "Затишна атмосфера"];
  const cafe = ["Якісна кава", "Смачні смаколики"];

  const group = [
    "Різноманітні напрямки для групових занять",
    "Великі і просторі зали",
  ];

  const solarium = ["Завжди нові лампи", "В наявності різномантні крема"];

  const imagesSet1 = ["/image1.png", "/image2.png", "/image3.png"];

  const imagesSet2 = ["/image4.png", "/image5.png", "/image6.png"];

  return (
    <>
      <Header />
      <MainContent />
      <Link_section />

      <Left_picture
        id="gym"
        title="ТРЕНАЖЕРНИЙ ЗАЛ"
        items={infoGym}
        imgSrc={`${process.env.PUBLIC_URL}/Gym.jpg`}
      />

      <Right_picture
        id="group"
        title="ГРУПОВІ ЗАНЯТТЯ"
        items={group}
        imgSrc={`${process.env.PUBLIC_URL}/bgGroup.png`}
      />

      <Left_picture
        id="massage"
        title="МАСАЖ"
        items={massage}
        imgSrc={`${process.env.PUBLIC_URL}/msg.jpg`}
      />

      <Right_picture
        id="sol"
        title="СОЛЯРІЙ"
        items={solarium}
        imgSrc={`${process.env.PUBLIC_URL}/sol.jpg`}
      />

      <Left_picture id="cafe" title="КАФЕ" items={cafe} imgSrc="cf.jpg" />

      <PictureSection imagesSet1={imagesSet1} imagesSet2={imagesSet2} />

      <PriceSection />

      <Footer />
    </>
  );
}

export default App;
