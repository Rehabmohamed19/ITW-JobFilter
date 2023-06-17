
import React from 'react'


export default function JobCard({ projects, matchTags, id, addTag, tags }) {
    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <ul>
                        {projects
                            .filter((proj) => matchTags(proj.tags, tags))
                            .map(({ tags, company, time, Img, location, jobtitle, contract, post }) => {
                                return (
                                    <div key={`card-${id}`} className='card'>
                                        <li key={id} className="job-card new featured my-3">

                                            <div className="job-card__info">
                                                <div className="d-md-flex align-items-center">
                                                    <div className="img-c">
                                                        <img src={Img} />
                                                    </div>
                                                    <div>
                                                        <div className="d-flex align-items-center">
                                                            <p>{company}</p>
                                                            <p className="tag-new">{post}!</p>
                                                            <p className="tag-featured">Featured</p>
                                                        </div>
                                                        <a href="">
                                                            <h6>{jobtitle}</h6>
                                                        </a>
                                                        <p className="description" style={{ color: "#939c9b", fontSize: "12px", fontWeight: "normal" }}>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem animi dicta cumque optio earum temporibus.
                                                            Voluptate, nobis! Quas asperiores consectetur provident qui necessitatibus hic repellat nisi dignissimos dicta odit,
                                                            ratione ullam expedita culpa quo vitae fugit cumque excepturi beatae?</p>

                                                        <ul>
                                                            <li>{time}</li>
                                                            <li>{contract}</li>
                                                            <li>{location}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {tags.map((tag) => {
                                                return (
                                                    <>
                                                        <ul className="job-card__tags">
                                                            <li
                                                                key={`add-button-${id}`}
                                                                type='button'
                                                                onClick={addTag(tag)}
                                                            >
                                                                #{tag}
                                                            </li>
                                                        </ul>
                                                    </>
                                                );
                                            })}
                                        </li>
                                    </div>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </>
    )
}
