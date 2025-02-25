import React from 'react';
import styles from './Country.module.scss';
import { country } from './flagData';
import { Link } from 'react-router-dom';

const Country = () => {
  const url = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/';

  return (
    <div className='app-container relative top-100'>
      <h2 className='w-300 m-auto flex items-center justify-center relative bottom-25 right-13 text-3xl'>
        by Country
      </h2>
      <div className='w-300 m-auto flex flex-wrap gap-12.5 mt-50'>
        {country.map(c => (
          <Link key={c.shortName} to={`/country/${c.name}`} className={styles.country}>
            <img src={`${url}${c.shortName}.svg`} alt={`${c.name} flag`} />
            <p>{c.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Country;
