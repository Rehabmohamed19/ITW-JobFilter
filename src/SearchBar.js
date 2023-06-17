import React from 'react'
import './Styles.css'

export default function SearchBar({ deleteTag, tags, id }) {
    return (
        <>
            <div class="container">
                <div className="row">
                    <div className="col-12">
                        <ul id="filter-tags-list">
                            <li className='job-card' >
                                {tags.length > 0
                                    ? tags.map((tag, id) => {
                                        return (
                                            <>
                                                <button
                                                    key={id}
                                                    className=''
                                                    onClick={deleteTag(tag)}
                                                >
                                                    {tag} &nbsp; x
                                                </button>
                                            </>

                                        );
                                    })
                                    : 'No tags selected'}
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}
