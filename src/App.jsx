import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./Components/Header";
import { SizzleReel } from "./Components/SizzleReel";

import { Home } from "./Pages/Home";

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
                </BrowserRouter>
            </main>
        </>
    )
}