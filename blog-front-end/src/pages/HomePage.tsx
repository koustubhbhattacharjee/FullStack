import React from 'react';

type HomePageProps={
    name:string
}
const HomePage = (props:HomePageProps) =>{
    return (
        <h1>
            This is {props.name} home page!
        </h1>
        
    )
}

export default HomePage