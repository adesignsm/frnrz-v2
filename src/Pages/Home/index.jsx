import { useEffect, useState } from "react";
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const Home = () => {
    const [data, setData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);
    const urlFor = (source) => {
      return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'home'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result);
        } catch (error) {   
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data)

    return (
        <>
            <section className='home-page'>
                <article className='quote-container'>
                    {data && data.backgroundImage && ( <img src={urlFor(data.backgroundImage.asset._ref).url()} /> )}
                    {data && data.quote && (
                        <h1>{data.quote}</h1>
                    )}
                </article>
            </section>
        </>
    )
}