import React from 'react';

const Persons = ({ persons }) => {
    return (
        <div className="person-list">
            {
                persons.map(person => {
                    return person.age > 5 ? (
                        <div className="person" key={person.id}>
                            <div>Name: {person.name}</div>
                            <div>Age: {person.age}</div>
                            <div>Belt: {person.belt}</div>
                        </div>
                    ) : null
                })
            }
        </div>
    )
}

export default Persons