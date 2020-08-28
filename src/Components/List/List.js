import React from 'react';
import list from './List.css';

const List = (props) => {

    console.log(props);
    const { img, title, description, price } = props.name;

    return (
        <div className="list" >
            <div>
            <div>
                <img src={img} alt="" />
            </div>
            </div>
            <div>
                <h4 className="list-name">{title}</h4>
                <br />
                <p><small>{description}</small></p>
                <p>Course Fee$  {price}</p>
                <button  className="btn"
                onClick={()=>props.handleAddCourse(props.name)}
                >Enroll Now</button>
            </div>


        </div>
    );
};

export default List;