import React from 'react';
import './SortByOptions.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count',
};

const SortByOptions = ({ active, onSortByChange }) => {
  const getSortByClass = sortByOption => {
    return sortByOption == active ? 'active' : '';
  }

  return (
    <div className="SearchBar-sort-options">
      <ul>
        {
          Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption];
            return (
              <li 
                key={ sortByOptionValue } 
                className={ getSortByClass(sortByOptionValue) }
                onClick={ onSortByChange(sortByOptionValue) }>
                  { sortByOption }
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

export default SortByOptions;