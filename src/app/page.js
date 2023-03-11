import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
    <Header></Header>
     
      <div style={{display:"flex", justifyContent:"center"}}>
      <Card></Card>
      <Card></Card><Card></Card>
      </div>
    </>
  );
}
