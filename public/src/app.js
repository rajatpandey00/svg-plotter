// const user = {
//     name: 'Rajat',
//     cities: ['Lucknow', 'Kanpur', 'Sydney', 'Bangalore'],
//     printCitiesILived () { // old function keyword is not context bound, so =>  function gets automatically bound by the context this.
//         this.cities.forEach(city => {
//             return console.log(this.name + ' lived in ' + city);
//         })
//     }
// }

// user.printCitiesILived();

import ReactDOM from 'react-dom'

var template = 'Something happened and showing on screen!!!!';
var appRoot = document.getElementById('root');
ReactDOM.render(template, appRoot);