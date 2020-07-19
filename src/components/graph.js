import React from 'react';

const SVG = props => {
    const cords = props.cords && props.cords.trim().split(" ");
    const polyType = props.type;
    switch (polyType) {
        case 'p':
            {
                console.log('Cors', cords.length)
                if (cords.length <= 2) {
                    props.setError("Polygon can only be constructed for more than two co-ordinates");
                    return null;
                } else {
                    props.setError(null);
                    return (
                        <polygon points={cords} fill={'#' + Math.random().toString(16).substr(2, 6)} />
                    );
                }
            }
        case 'r':
            {
                if (!(cords[0] && cords[1] && cords[2] && cords[3])) {
                    props.setError("Please pass on correct set of parameters for SVG of type r");
                    return null;
                } else {
                    props.setError(null);
                    return (
                        <rect x={cords[0]} y={cords[1]} width={cords[2]} height={cords[3]} fill={'#' + Math.random().toString(16).substr(2, 6)} />
                    );
                }
            }

        case 'c':
            {
                if (!(cords[0] && cords[1] && cords[2])) {
                    props.setError("Please pass on correct set of parameters for SVG of type c");
                    return null
                } else {
                    props.setError(null);
                    return (
                        <circle cx={cords[0]} cy={cords[1]} r={cords[2]} fill={'#' + Math.random().toString(16).substr(2, 6)} />
                    );
                }
            }
        default:
            return null;
    }

}

export default SVG;