import React, { Component } from 'react';
import './Welcome.css'

export default class Welcome extends Component {
  Logout() {
    localStorage.clear()
    window.location.replace(window.location.origin)
  }

  render() {
    return (
      <div className="welcome-container">
        <h1 className="welcome">Bem-vindo, {localStorage.name}</h1>
        <div className="action-buttons-container">
          <button onClick={this.Logout}>SAIR DA CONTA</button>
        </div>
      </div>
    )
  }
}