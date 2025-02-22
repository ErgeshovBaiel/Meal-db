import React from 'react'
import styles from './Country.module.scss'

const Country = () => {
  const flagData = [
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
      name: 'United States'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg',
      name: 'United Kingdom'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg',
      name: 'Canada'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg',
      name: 'China'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/HR.svg',
      name: 'Croatia'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg',
      name: 'Netherlands'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/EG.svg',
      name: 'Egypt'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PH.svg',
      name: 'Philippines'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg',
      name: 'France'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GR.svg',
      name: 'Greece'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg',
      name: 'India'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IE.svg',
      name: 'Ireland'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg',
      name: 'Italy'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JM.svg',
      name: 'Jamaica'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg',
      name: 'Japan'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KE.svg',
      name: 'Kenya'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MY.svg',
      name: 'Malaysia'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg',
      name: 'Mexico'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MA.svg',
      name: 'Morocco'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg',
      name: 'Poland'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg',
      name: 'Portugal'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg',
      name: 'Russia'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg',
      name: 'Spain'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg',
      name: 'Thailand'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TN.svg',
      name: 'Tunisia'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg',
      name: 'Turkey'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg',
      name: 'Vietnam'
    },
    {
      url: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PS.svg',
      name: 'Palestine'
    }
  ]

  return (
    <div className="mt-25 ml-20">
    <h2 className="w-300 m-auto flex items-center justify-center text-3xl pl-15">by Country</h2>
    <div className="w-300 m-auto flex flex-wrap gap-12.5 mt-25">
    {flagData.map((country, index) => (
        <div key={index} className={styles.country}>
            <img
                src={country.url}
                alt={country.name}
                className={styles.flagImage}
            />
            <span className="text-[18px] font-normal">{country.name}</span>
        </div>
    ))}
</div>
    </div>
  )
}

export default Country
