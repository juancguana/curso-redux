import React, { Component } from 'react'
import { connect } from 'react-redux'
import Spinner from '../General/Spinner'
import Fatal from '../General/Fatal'
import * as usuariosActions from '../../actions/usuariosActions'
import Tabla from './Tabla'

class Usuarios extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.traerTodos()
    }
  }

  ponerContenido = () => {
    if (this.props.cargando) {
      return <Spinner />
    }
    if (this.props.error) {
      return <Fatal mensaje={this.props.error} />
    }
    return (
      <Tabla />
    )
  }

  render() {
    return <div>{this.ponerContenido()}</div>
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducers
}

export default connect(mapStateToProps, usuariosActions)(Usuarios)
