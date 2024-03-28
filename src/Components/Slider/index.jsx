import { useEffect, useState } from 'react';
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

import './index.css';

export const Slider = ({ media }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [images] = useState(media || [])

    const builder = ImageUrlBuilder(sanityClient);

    const urlFor = (source) => {
        return builder.image(source);
    }

    useEffect(() => {
        if (!isPaused && images.length > 0) {
            const totalWidth = images.length * sliderWidth;
            const interval = setInterval(() => {
                setScrollPosition(prevPosition => {
                    if (prevPosition >= totalWidth) {
                        return 0;
                    } else {
                        return prevPosition + 0.5;
                    }
                });
            }, 1);

            return () => clearInterval(interval);
        }
    }, [isPaused, sliderWidth]);

    const handleImageLoad = () => {
        const imageWidth = document.querySelector('.slider img')?.offsetWidth || 0;
        setSliderWidth(imageWidth);
    };

    const handlePauseToggle = () => {
        setIsPaused(prev => !prev);
    };

    return (
        <>
            {images && images.length > 0 && (
                <div 
                    className='slider' 
                    style={{ transform: `translateX(-${scrollPosition}px)` }} 
                    onLoad={handleImageLoad}
                    onClick={handlePauseToggle}
                >
                    {images.map((image, index) => (
                        image.asset && (
                            <img 
                                key={index} 
                                src={urlFor(image.asset._ref).url()} 
                                onLoad={handleImageLoad}
                                className={isPaused ? 'paused' : ''}
                                loading='lazy'
                            />
                        )
                    ))}
                </div>
            )}
        </>
    )
}