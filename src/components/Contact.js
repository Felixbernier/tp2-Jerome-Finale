import React, { Component } from 'react';

export class Contact extends Component {
    
    render() {
      return (
            <div>
                <h1>Contact</h1>
                <p>Personne à rejoindre : {this.props.nom}</p>
                <p>Téléphone : {this.props.telephone}</p>
                </div>
        );
    }
}