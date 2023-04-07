import React from 'react';
import Lottie from "lottie-react";
import reader from '../assets/reader.json';

const Home = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
           <div>
            <h2>Left side</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia earum aliquam optio architecto corporis quia laborum, repellendus suscipit porro cum repellat voluptatem, voluptate temporibus ab rerum labore sunt velit incidunt ratione accusamus, libero eveniet! Qui temporibus eligendi iste, ipsam officiis voluptatibus molestias excepturi! Modi ratione, facere perferendis non laboriosam voluptatum?</p>
           </div>
           <div>
            <h2>Right side</h2>
            <Lottie animationData={reader} loop={true}/>;
           </div>
        </div>
    );
};

export default Home;