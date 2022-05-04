import React from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}