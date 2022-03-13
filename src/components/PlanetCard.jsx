import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet" data-testid="planet-card">
        <img id={ planetName } src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
