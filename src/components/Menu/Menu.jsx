//rfc - shortcut
// import React from 'react'

// export default function Header() {
//     return (
//         <div>
//             the header
//         </div>
//     )
// }

//rcc - for class component
// import React, { Component } from 'react'

// export default class Header extends Component {
//     render() {
//         return (
//             <div>
//                 The navbar
//             </div>
//         )
//     }
// }



// export const anotherModule = () => {
//     return <h1>Hello!</h1>
// }

import React from 'react'

// const ingredients = {
//     vegetables: 'cauliflower',
//     meat: 'Tenderloin',
//     sauce: 'BBQ'
// }

export default function Menu(props) {
    return (
        <ul>
            <li>{props.vegatebles}</li>
            <li>{props.meat}</li>
            <li>{props.sauce}</li>
        </ul>
    )
}

