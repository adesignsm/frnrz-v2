import { useState, useEffect } from "react";
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const About = () => {
    const [data, setData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'about'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result)
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
            <section className='about-page'>
                {data && (
                    <>
                        <article className='about-container'>
                            {data && data.aboutContent && (
                                <>
                                    <h1>{data.aboutContent.title}</h1>
                                    <p>
                                        <span style={{color: data.aboutContent.highlightColor.value}}>
                                            {data.aboutContent.description.split(" ")[0]}
                                        </span>
                                        {data.aboutContent.description.substr(data.aboutContent.description.indexOf(" ") + 1)}
                                    </p>
                                </>
                            )}
                        </article>
                        <article className='creative-vision-container'>
                            {data && data.creativeVisionProcessContent && (
                                <>
                                    <h1>{data.creativeVisionProcessContent.title}</h1>
                                    <p>
                                        <span style={{color: data.creativeVisionProcessContent.highlightColor.value}}>
                                            {data.creativeVisionProcessContent.description.split(" ")[0]}
                                        </span>
                                        {data.creativeVisionProcessContent.description.substr(data.creativeVisionProcessContent.description.indexOf(" ") + 1)}
                                    </p>
                                </>
                            )}
                        </article>
                        <div className='clients-container'>
                            {data && data.clientsContent && (<h1>{data.clientsContent.title}</h1>)}
                            {data && data.clientsContent && (
                                <div className='logos'>
                                    {data.clientsContent.clients.map((client) => {
                                        return (
                                            <img src={urlFor(client.asset._ref).url()} />
                                        )
                                    })}
                                </div>  
                            )}
                        </div>
                    </>
                )}
            </section>
        </>
    )
}