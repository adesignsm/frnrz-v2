import { useEffect, useState } from "react";
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const SizzleReel = () => {
    const [data, setData] = useState([]);
    const [showVideo, setShowVideo] = useState(false)

    const fetchData = async () => {
        try {
            const query = `*[_type == 'sizzleReel'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result);
        } catch (error) {   
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleVideoClick = (e) => {
        if (e.target.id === 'video-reel-container') {
            e.target.classList.add('hide');
        }
    }

    return (
        <>
            <div id='video-reel-container' className="video-reel-container" onClick={(e) => {handleVideoClick(e)}}>
                <iframe className="video-reel" 
                    src={data.link}
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullscreen>
                </iframe>
            </div>
        </>
    )
}