import React from 'react'
import Heading from './Heading'
import {Link} from "gatsby"

export default function DualInfoblock({heading, src}) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente quis, suscipit voluptas quisquam saepe ipsam accusantium nam quia et soluta libero perspiciatis ducimus nesciunt labore error minus eligendi ut corporis illum ad. Animi dolor ratione impedit eveniet asperiores beatae. Eveniet laboriosam nisi distinctio possimus dolor. Nobis ducimus voluptate eum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quae numquam molestiae voluptatem sapiente nemo, vero veniam non nihil aut dolor quibusdam deserunt facilis nam? Nisi quam natus harum itaque? Fugit eveniet voluptate mollitia modi reprehenderit rem recusandae libero ipsum? A ipsam est aspernatur. Doloribus nesciunt possimus eos architecto ad dolore quisquam pariatur vero. Minima iste eum unde facilis, aliquam consequatur, magni expedita necessitatibus facere consequuntur, accusamus quae. Quibusdam in unde dolore tempore consequuntur veniam fugit fugiat quae. Doloribus, repudiandae. Ab, molestiae consequuntur! Dolores cum nihil praesentium saepe incidunt deleniti, mollitia, ipsa minus tempore impedit voluptates reprehenderit ex quam distinctio.
                        </p>
                    </div>
                    <div className="col-4">
                    <div className="card bg-dark" >
                        <img className="card-img-top" src={src} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title text-success">Just Click Photos</h5>
                            <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis dolore mollitia fugit, perferendis itaque nobis repudiandae. Inventore tenetur quibusdam maxime commodi asperiores ipsum dicta. Repudiandae nesciunt esse sed ratione sapiente?</p>
                            <Link to="/" className="btn btn-warning btn-block" >{heading}</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
