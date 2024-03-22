import { useState, useEffect } from 'react';
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

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
        } catch (error) {   
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        
        </>
    )
}