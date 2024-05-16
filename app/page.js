import "../section/home/slideShow/slideShow.css"
import "../section/home/flashDeal/flashDealStyle.css"
import SlideShow from "@/section/home/slideShow/SlideShow";
import MainHome from "@/section/home/MainHome";

export default function Home() {
  return (
      <>
        <SlideShow/>
        <MainHome/>
      </>
  );
}
