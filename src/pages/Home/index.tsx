import Activities from "../../components/HomePage/Banner/Activities";
import Banner from "../../components/HomePage/Banner/Banner";
import SearchSection from "../../components/HomePage/Banner/SearchSection";
import Testimonies from "../../components/HomePage/Banner/Testimonies";

export default function Home() {
    return(
        <>
            <Banner />
            <SearchSection />
            <Activities />
            <Testimonies />
        </>

    )
}