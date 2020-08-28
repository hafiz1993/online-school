import React, { useState } from 'react';
import fakeData from '../../Components/fakeData/fakeData';
import './Courses.css';
import List from '../List/List';
import Cart from '../Cart/Cart';

const Courses = () => {
    const first12 = fakeData.slice(0, 15);
    const [courses, setCourses] = useState(first12);
    const [cart, setCart] =useState([]);

    const handleAddCourse= (course) => {
        console.log('product', course);
        const newCart =[...cart, course];
        setCart(newCart);
    }
    
    return (
        <div className="courses-container">
            
            <div className="course-container">
     
            {
            courses.map(course=> <List handleAddCourse={handleAddCourse} name={course}></List>)
            }

            </div>
            <div>
            <Cart cart={cart}></Cart>
            </div>
            
            
            
    
               
            </div>
        
    );
};

export default Courses;