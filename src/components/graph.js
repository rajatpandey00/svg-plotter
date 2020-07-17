import React from 'react';

const SVG = (props) => {
    const polyType = props.type;
    console.log('props', props);
    switch (polyType) {
        case 'p':
            return (
                <div>
                    <svg width="250px" height="250px">
                        <polygon points="100,10 150,90 60,110 10,20" fill="green" />
                    </svg>
                </div>
            );
        case 'r':
            return (
                <div>
                    <svg width="250px" height="250px">
                        <rect x="0" y="10" width="100" height="50" fill="red" />
                    </svg>
                </div>
            );

        case 'c':
            return (
                <div>
                    <svg width="250px" height="250px">
                        <circle cx="50" cy="50" r="50" fill="orange" />
                    </svg>
                </div>
            );
        default:
            return null;
    }

}

export default SVG;