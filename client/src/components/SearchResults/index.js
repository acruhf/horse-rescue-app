import React from 'react';

const SearchResults = (props) => {
  console.log(props)
  return (
    <>
    {props.results.map((employee, index) => {
      const {
        picture: {thumbnail},
        email,
        name: {first, last},
        phone,
      } = employee;


      return (
        <tr key={index}>
          <td>
          <img alt={employee} className="img-fluid" src={[thumbnail]} /></td>
          <td>{[first, last].join(' ')}</td>
          <td> {phone} </td>
          <td> {email} </td>
      </tr>
    )})}
    </>
  
  );
}

export default SearchResults;