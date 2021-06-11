/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework';

export default function SearchByDish({ onChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Choose recipe"
        onChange={e => onChange(e.target.value.toLowerCase())}
      />
      <br />
    </>
  );
}
