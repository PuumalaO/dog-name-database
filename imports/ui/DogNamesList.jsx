import React, { Component } from 'react';

const DogNamesList = (props) => {
    const dogNames = props.dogNames.map((dog)=>{
      return(<p>{dog.name}</p>)
    })

    return (
      <div>
        {dogNames}
      </div>
    );
  }

export default DogNamesList