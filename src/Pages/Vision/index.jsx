import { useState, useEffect } from 'react';
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

import { Model } from '../../Components/Model';

export const Vision = () => {
    const [data, setData] = useState([]);

    const builder = ImageUrlBuilder(sanityClient);
    const urlFor = (source) => {
      return builder.image(source);
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'vision'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result.visionContent);
        } catch (error) {   
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    return (
        <>
            <section className='vision-page'>
                <div className='vision-container'>
                    {data && data.title && ( <h1>{data.title}</h1>)}
                    {data && data.description && (
                        <div className='description' dangerouslySetInnerHTML={{__html: data.description[0]?.children[0]?.text}} />
                    )}
                </div>
                <div className='creative-container'>
                    <Model />
                </div>
            </section>
        </>
    )
}