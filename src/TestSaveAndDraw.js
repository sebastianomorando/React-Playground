import React from 'react';

const Scrivi = (props) => <b>{props.testo} {props.children}</b>

const dati = {
  type: Scrivi,
  props: { testo: 'Mario' },
  children: {
    type: 'div',
    props: null,
    children: 'ciao franco'
  }
}

const genereateReactElement = data => {
  if (typeof data.children === 'object') return React.createElement(data.type, data.props, genereateReactElement(data.children))
  if (typeof data.children === 'string') return React.createElement(data.type, data.props, data.children)
}


const TestSaveAndDraw = () => genereateReactElement(dati)

export default TestSaveAndDraw
