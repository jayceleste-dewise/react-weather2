import React, { useState, useEffect } from 'react';
import {
  Text,
  TextField,
  DefaultButton,
  DocumentCard,
  DocumentCardTitle,
} from '@fluentui/react';
import { IWeatherData } from './types';

import api, { apiKey } from '../../services/api';

import cloudy from '../../assets/cloudy.svg';

import './styles.css';


const Finder: React.FC = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData[]>([]);
  const [cityName, setCityName] = useState('São Paulo');

  async function handleWeatherData(): Promise<void> {
    if (!(cityName.trim())) {
      return;
    }

    const response = await api
      .get(`weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`);

    const cityData = {
      id: response.data.id,
      name: response.data.name,
      humidity: response.data.main.humidity,
      current: response.data.main.temp,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      description: response.data.weather[0].description,
    }

    const cityAlreadySelected = weatherData.filter(data => data.id === cityData.id);
    if (cityAlreadySelected.length) return;

    const data = [cityData, ...weatherData];

    setWeatherData(data);
  }

  function handleCityName(e: any) {
    setCityName(e.target.value);
  }

  function removeCard(id: number) {
    const data = weatherData.filter(item => item.id !== id);
    setWeatherData(data);
  }

  useEffect(() => {
    handleWeatherData();
  }, []);

  return (
    <div className="finder">
      <header>
        <TextField
          placeholder="Cidade"
          className="input"
          underlined
          onChange={handleCityName}
        />

        <DefaultButton
          className="button"
          text='Pesquisar'
          onClick={handleWeatherData}
        />
      </header>

      <section>
        {weatherData?.map(item => (
          <DocumentCard key={item.id}>
            <DocumentCardTitle title={`${item.name} - ${item.description}`}/>

            <input
              className="remove-btn"
              type="button"
              onClick={() => removeCard(item.id)}
            />

            <div className="card-body">
              <img
                src={cloudy}
                alt='Weather'
              />
              <div>
                <Text className="description">
                  <small>Atual:</small>
                  <span>{item.current}&ordm;C</span>
                </Text>
                <Text className="description">
                  <small>Máxima:</small>
                  <span>{item.max}&ordm;C</span>
                </Text>
                <Text className="description">
                  <small>Mínima:</small>
                  <span>{item.min}&ordm;C</span>
                </Text>
                <Text className="description">
                  <small>Humidade:</small>
                  <span>{item.humidity}%</span>
                </Text>
              </div>
            </div>
          </DocumentCard>
        ))}
      </section>
    </div>
  );
}

export default Finder;
