import React from 'react'

export default function BiggerThanFive(props) {
    return (
        <div>
            {props.number > 5 ? 'It\'s bigger than five' : 'not biggert then five'}
        </div>
    )
}

