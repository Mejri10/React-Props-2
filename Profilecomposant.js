import React from 'react'
import PropTypes from 'prop-types';



Profilecomposant.defaultProps={
    fullName:"",
    bio:"",
    Profession:"",

};
Profilecomposant.prototype={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    Profession:PropTypes.string

}


function Profilecomposant(props) {
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial"
      };

      function handleClick(e) {
        e.preventDefault();
        alert("Mejri");
      }

    return (
        
        <div>
             <a href="/" onClick={handleClick }>
             Click me
             </a>
            {props.children}
          < p style={mystyle}>Full Name:{props.fullName}</p>
          < p >Bio:{props.bio}</p>
          < p >Profession:{props.profession}</p>
          
        </div>
    )
}

export default Profilecomposant
PropTypes.checkPropTypes(Profilecomposant);
