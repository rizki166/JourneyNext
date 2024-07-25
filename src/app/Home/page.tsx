"use client"
import CardJourney from "@/component/Card/CardJourney"
import InputJourney from "@/component/Input/InputJourney"
import Navbar from "@/component/Navbar/Navbar"


const Home = () => {
    return (
        <div>
            <Navbar />
            <h1 style={{ marginLeft: "20px" }}>Journey</h1>
            <InputJourney />
            <CardJourney />
        </div>
    )
}

export default Home