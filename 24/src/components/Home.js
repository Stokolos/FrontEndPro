import React from "react";
import { Link } from "react-router-dom"

const Home = () => (
    <section className="home-container">
        <h1>Git Battle</h1>
        <Link className="button" to="/battle">Battle</Link>
    </section>

)

export default Home