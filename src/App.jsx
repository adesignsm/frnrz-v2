import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header";
import { SizzleReel } from "./Components/SizzleReel";
import { Stars } from "./Components/Stars";
import { Footer } from "./Components/Footer";

import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";

export const App = () => {
    return (
        <>
            <main className="inner-page">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route path='/projects' element={<Projects />} />
                    </Routes>
                    <SizzleReel />
                    <Stars />
                    <Footer />
                </BrowserRouter>
            </main>
        </>
    )
}