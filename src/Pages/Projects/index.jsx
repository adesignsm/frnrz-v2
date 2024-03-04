import { useEffect, useState } from "react";
import sanityClient from "../../client";
import ImageUrlBuilder from '@sanity/image-url';

import { Slider } from "../../Components/Slider";

import './index.css';

export const Projects = () => {
    const [data, setData] = useState([]);
    const [openProjectIndex, setOpenProjectIndex] = useState(null);

    const builder = ImageUrlBuilder(sanityClient);
    const urlFor = (source) => {
      return builder.image(source);
    }

    const hideDropDown = (e) => {
        console.log(e.target.id);
        if (e.target.id === 'dropdown-container') {
            setOpenProjectIndex(null)
        }
    }

    const fetchData = async () => {
        try {
            const query = `*[_type == 'projects']`;
            const result = await sanityClient.fetch(query);
            setData(result);
        } catch (error) {   
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <section className='projects-page'>
                <div className='projects-container'>
                    {data && data.length > 0 && (
                        data.slice().sort((a, b) => a.project_order_number - b.project_order_number).map((project) => {
                            const isDropdownOpen = openProjectIndex === project.project_order_number;
                            return (
                                <>
                                    <div className={`project ${isDropdownOpen ? 'active' : ''}`} index={project.project_order_number}>
                                        <div className='cover'>
                                            <img src={urlFor(project.project_cover.asset._ref).url()} />
                                            <div className="overlay" onClick={() => setOpenProjectIndex(isDropdownOpen ? null : project.project_order_number)}>
                                                <h2>{project.project_subheading}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                            id='dropdown-container' 
                                            className={`dropdown-container ${isDropdownOpen ? 'show' : ''}`} 
                                            onClick={(e) => hideDropDown(e)}
                                        >
                                            <div className='dropdown-content'>
                                                <h1>{project.project_title}</h1>
                                                <h2>{project.project_subheading} - {project.project_year}</h2>
                                                <Slider media={project.project_media} />
                                                <div className="description">
                                                    <h3>{project.project_description}</h3>
                                                    <ul>
                                                        {project.project_roles && project.project_roles.map((role, index) => {
                                                            return <li key={index}>{role}</li>
                                                        })}
                                                    </ul>
                                                </div>
                                                <a href={project.project_link}>View</a>
                                            </div>
                                        </div>
                                </>
                            )
                        })
                    )}
                </div>  
            </section>
        </>
    )
}