import { useEffect, useState } from "react";
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const Header = () => {
    const [navigation, setNavigation] = useState([]);
    const [logos, setLogos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const builder = ImageUrlBuilder(sanityClient);
    const urlFor = (source) => {
      return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'header'][0]`;
            const result = await sanityClient.fetch(query);
            setNavigation(result.navigation);
            setLogos(result.logos);
        } catch (error) {   
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        let interval;

        if (logos.length > 0) {
            interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
            }, 2000);
        }

        return () => clearInterval(interval);
    }, [logos]);

    return (
        <>
            <header className='header'>
                {logos && logos.length > 0 && logos[currentIndex] && (
                    <div className="logo-container">
                        <img src={urlFor(logos[currentIndex].asset._ref).url()} />
                    </div>
                )}
                {navigation && navigation.length > 0 && (
                    <nav className="navigation">
                        {navigation.map((item) => {
                            return (
                                <a key={item._key} href={`/${item.title.toLowerCase()}`}>
                                    <img src={urlFor(item.icon.asset._ref).url()} />
                                </a>
                            )
                        })}
                    </nav>
                )}
            </header>
        </>
    )
}