
import React from 'react';
type AboutProps={
    name:string
}
const About= (props:AboutProps) =>{
    return (
        <h1>
            This is {props.name} about page!
        </h1>
    )
}

export default About