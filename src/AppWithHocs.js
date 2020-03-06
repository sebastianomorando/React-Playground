import React from 'react';

const WithProps = Component => (props) => {
    const [state, setState] = React.useState('mario')
    return <Component state={state} setState={setState} {...props} />
  }


const Hello = WithProps((props) =>
  <div>
    {props.wat} <br/>
    {props.state} <br/>
  </div>)


const AppWithHocs = () => <div>
  <Hello wat='ciao' />
</div>

export default AppWithHocs
