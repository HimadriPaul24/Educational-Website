import React from 'react';
import './Body.css';

const Body = () => {
    return (
        <div>
            <div class="container my-5 text-center p-5">

                <h1 class="title">What we do?</h1>

                <div class="row text-center">

                    <div class="col-md-4 services">
                        <div className="icon mx-auto">
                            <i class="fas fa-guitar"></i>

                        </div>
                        <h4>Classical</h4>
                        <p>Classical music is a term that most commonly refers to the formal musical tradition of the Western world, considered to be distinct from Western folk music or popular music traditions. In a more general sense, the term may also refer to music evidencing similar formal qualities in non-Western cultures</p>
                    </div>

                    <div class="col-md-4 services">
                        <div className="icon mx-auto">
                            <i class="fas fa-headphones-alt"></i>
                        </div>
                        <h4>Rock</h4>
                        <p>
                            Rock 'n' roll is a popular music genre that combines elements of rhythm and blues (RandB), jazz, and country music with the addition of electric instruments. Originally associated with youth revolt and transgression, the genre is known for energetic performances, catchy melodies, and often insightful lyric</p>
                    </div>

                    <div class="col-md-4 services">
                        <div className="icon mx-auto">
                            <i class="fas fa-drum"></i>

                        </div>
                        <h4>Folk Music</h4>
                        <p>Folk music, type of traditional and generally rural music that originally was passed down through families and other small social groups. Typically, folk music, like folk literature, lives in oral tradition; it is learned through hearing rather than reading </p>
                    </div>

                </div>

                <button type="button" class="btn btn-primary">All Services</button>

            </div>
        </div>
    );
};

export default Body;