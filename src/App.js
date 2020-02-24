import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FiJzBe08Rtb8%2Fhqdefault.jpg&f=1&nofb=1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.news.zumst.com%2Fimages%2F2%2F2017%2F02%2F26%2F2030c76e427f4c278c16ab0eb81bd45d.jpg&f=1&nofb=1',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'kimbap',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F60ANBnHjiDU%2Fmaxresdefault.jpg&f=1&nofb=1',
    rating: 4.8,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
