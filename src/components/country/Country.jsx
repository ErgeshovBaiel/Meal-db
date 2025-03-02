import React from 'react';
import styles from './Country.module.scss';
import { country } from './flagData';
import { Link } from 'react-router-dom';

const Country = () => {
  const url = 'https://purecatamphetamine.github.io/country-flag-icons/3x2/';

  return (
    <div className={styles.appContainer}>
      <hr />
      <h2 className={styles.title}>by Country</h2>
      <div className={styles.countryList}>
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
