// components/Header.tsx

import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import RteHindi from './RteHindi';
import RteCanada from './RteCanada';
import RteUs from './RteUs';

interface HeaderProps {
  // Add any additional props as needed
}

const Header: React.FC<HeaderProps> = () => {
  // State for language and country dropdown selections
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [selectedCountry, setSelectedCountry] = useState<string>('us');
  var route = useRouter();

  const getIp = async () => {
    const response = await fetch(`http://localhost:3000/api/me`);
    const geo = await response.json();
    const countryCode = geo?.country;
    if (countryCode == 'IN') {
      setSelectedCountry('in');
    }
    if (countryCode == 'US') {
      setSelectedLanguage('en');
      setSelectedCountry('us');
    }
    if (countryCode == 'CA') {
      setSelectedLanguage('fr');
      setSelectedCountry('ca');
    }

    return countryCode;
  };
  // Function to handle language selection
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value == 'en') {
      route.push('/' + 'en');
    }
    if (event.target.value == 'hi') {
      route.push('/' + 'hi');
    }

    if (event.target.value == 'fr') {
      route.push('/' + 'fr');

      // You can dispatch an action to update the Redux store here
    }
    if (event.target.value == 'sh') {
      route.push('/' + 'sh');

      // You can dispatch an action to update the Redux store here
    }
    setSelectedLanguage(event.target.value);
  };

  var x = route.asPath;

  // Function to handle country selection
  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    // You can dispatch an action to update the Redux store here
  };
  const handleCountryChangeOnLanguageChange = () => {
    if (selectedCountry == 'us') {
      route.push('/' + 'en');
      setSelectedLanguage('en');
    }
    if (selectedCountry == 'in') {
      route.push('/' + 'hi');
      setSelectedLanguage('hi');
    }

    if (selectedCountry == 'ca') {
      route.push('/' + 'fr');
      setSelectedLanguage('fr');
    }
    if (selectedCountry == 'sp') {
      route.push('/' + 'sh');
      setSelectedLanguage('sh');
    }
  };

  

  useEffect(() => {
    getIp();
  }, []);

  useEffect(() => {
    handleCountryChangeOnLanguageChange();
  }, [selectedCountry]);



  return (
    <header>
      <div className="country-dropdown">
        <label htmlFor="country">Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="in">India</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="sp">Spain</option>
          {/* Add more country options as needed */}
        </select>
      </div>
      <div className="language-dropdown" style={{ marginTop: '10px' }}>
        <label htmlFor="language">Language:</label>
        <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="hi">Hindi</option>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="sh">Spainish</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      {selectedLanguage === 'hi' && (
        <>
          <RteHindi />
        </>
      )}

      {selectedLanguage === 'en' && (
        <>
          <RteUs />
        </>
      )}
      {selectedLanguage === 'fr' && (
        <>
          <RteCanada />
        </>
      )}
      {selectedLanguage === 'sh' && (
        <>
          <h1>It is showing fallback content of US English</h1>
          <RteUs />
        </>
      )}
    </header>
  );
};

export default Header;
