import React from 'react';
import {
  Text, DefaultButton,
} from '@fluentui/react';

import './styles.css';

import cloudy from '../../assets/cloudy.svg';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <Text style={{display: 'flex', alignItems: 'center'}}>
        <img width="32" src={cloudy} style={{ marginRight: 20 }} alt="React Weather"/>
        ReactWeather
      </Text>
      <DefaultButton text="Github" onClick={
        () => window.open('https://github.com/JoseLeandro99/react-weather')
      }/>
    </nav>
  );
}

export default Header;
