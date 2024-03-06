import { useEffect, useState } from "react";
import sanityClient from "../../client";

import './index.css';

export const Services = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const query = `*[_type == 'services'][0]`;
            const result = await sanityClient.fetch(query);
            setData(result.services);
        } catch (error) {   
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className='services-page'>
                <div className="services-container">
                    {data && (
                        data.map((serviceBlock) => {
                            return (
                                <div id={serviceBlock.title} className='service-card'>
                                    <h1>{serviceBlock.title}</h1>
                                    {serviceBlock.children && serviceBlock.children.map((child) => {
                                        return (
                                            <ul className='service-block'>
                                                <li>
                                                    <h4 className="service-title">{child.title}</h4>
                                                    {child.children !== undefined && child.children.map((child) => {
                                                        return (
                                                            <ul className="dropdown">
                                                                <li className="dropdown-li">{child}</li>
                                                            </ul>
                                                        )
                                                    })}
                                                </li>
                                            </ul>
                                        )
                                    })}
                                </div>
                            )
                        })
                    )}
                </div>
            </section>
        </>
    )
}