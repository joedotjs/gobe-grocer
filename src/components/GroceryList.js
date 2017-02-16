import React from 'react';

export default props => {
    return (
      <ul>
          {props.items.map(item => {
              return (
                <li key={item.name}>
                    <h2>{item.name}</h2>
                    <i>{item.familyMember}</i>
                    <strong>{item.price}</strong>
                </li>
              );
          })}
      </ul>
    );
};