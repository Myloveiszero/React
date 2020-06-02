import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
<<<<<<< HEAD
import slug from 'slugify';

=======
>>>>>>> bbe18b40992644ff359d53de18270686e496fdeb
class Beer extends React.Component {
  
  static propTypes = {
    details: PropTypes.object.isRequired
  }


  render() {
    const { name, labels, id } = this.props.details;
    const image = labels? labels.medium: 'null.jpg';
    return (
      <div className="beer">
<<<<<<< HEAD
        <Link to={`/beer/${id}/${slug(name)}`}>
=======
        <Link to={`/beer/${id}/${name}`}>
>>>>>>> bbe18b40992644ff359d53de18270686e496fdeb
          <h2>{name}</h2>
          <img src={image} alt=""/>
        </Link>
      </div>
    )
  }
}


export default Beer;