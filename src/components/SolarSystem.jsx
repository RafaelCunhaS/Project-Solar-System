import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets">
          {planets.map((planet) => (
            <section key={ planet.name }>
              <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
            </section>
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
