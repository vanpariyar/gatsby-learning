import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, aliquam labore nulla perspiciatis rem beatae dolores mollitia fugit non dicta nobis nam reprehenderit delectus harum est sint, molestias quo sequi voluptatibus earum hic voluptate minima numquam. Consectetur deleniti amet a dolore sit veritatis eligendi illo pariatur ducimus? Necessitatibus in eum optio distinctio! Eius dolorum repudiandae, explicabo et distinctio neque.
                            <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
