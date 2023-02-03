import React, { useState } from 'react';

function FAQ() {
  const [sorting, setSorting] = useState('');
  console.log(sorting);
  return (
    <select
      onChange={(e) => setSorting(e.target.value)}
      style={{ height: '46px', fontSize: '16px', width: '180px' }}>
      <option value='default'>Please Select</option>
      <option value='createdAt'>Latest</option>
      <option value='-createdAt'>Oldest</option>
      <option value='-price'>Price (Highest)</option>
      <option value='price'>Price (Lowest)</option>
      <option value='-averageRating'>Rating (Highest)</option>
      <option value='averageRating'>Rating (Lowest)</option>
    </select>
  );
}

export default FAQ;