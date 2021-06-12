import React from 'react';

export default function SearchByDish({ onBlur }) {
  return (
    <>
      <input
        type="text"
        placeholder="Choose recipe"
        onBlur={e => onBlur(e.target.value.toLowerCase())}
      />
      <br />
    </>
  );
}
