import React from 'react';
import './cards.css';
// import API from '../../utils/API';

const Card = props => {
    return(
        <>
            <h1>Restaurant Generator</h1>
                <div className="card text-center results">
                    <div className="overflow">
                        <img src="https://www.foodiecrush.com/wp-content/uploads/2016/11/The-Easiest-Dungeness-Crab-Recipe-foodiecrush.com-0011-1-480x270.jpg" className="img-fluid cardImg" alt="crab"/>
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">Restaurant Name</h4>

                        <ul className="list-group list-group-flush">
                            <li className="card-text text-secondary list-group-item cuisine">Cuisine: Seafood</li>
                            <li className="card-text text-secondary list-group-item price">Price Range: $$-$$$</li>
                            <li className="card-text text-secondary list-group-item address">Address: 6525 somewhere st, CA</li>
                        </ul>

                        <a href="#" className="btn btn-outline-success website">Website</a>
                        <a href="#" className="btn btn-outline-success call">Call</a>
                    </div>
                </div>
        </>


    )
}

//lavacake: https://ls.imgix.net/recipes/thumbnails/Bosch---Molten-Lava-Cake-RESIZED.jpg?w=640&h=360&auto=compress,format&fit=crop
//crab: https://www.foodiecrush.com/wp-content/uploads/2016/11/The-Easiest-Dungeness-Crab-Recipe-foodiecrush.com-0011-1-480x270.jpg
//pizza: https://popmenucloud.com/cdn-cgi/image/width=1200,height=630,format=auto,fit=cover/whfsiyqa/13c30c24-4394-4822-83c6-1e677c36cbeb


export default Card;

