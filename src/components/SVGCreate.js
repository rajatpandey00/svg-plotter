import React from 'react';
import SVG from './graph'

const create = () => {
     const types = ["c", "p", "r"];
     return types.map((type , index)=> <SVG type={type} key={index} />
    )
}

export default create;