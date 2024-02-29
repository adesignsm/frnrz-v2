import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header";
import { SizzleReel } from "./Components/SizzleReel";
import { Stars } from "./Components/Stars";

import { Home } from "./Pages/Home";
import { Footer } from "./Components/Footer";

export const App = () => {
    return (
        <>
            <main className="inner-page">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                    </Routes>
                    <SizzleReel />
                    <Stars />
                    <Footer />
                </BrowserRouter>
            </main>
        </>
    )
}