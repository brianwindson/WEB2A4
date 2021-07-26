import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar';

import './index.css';


function Calendario(props) {const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

ReactDOM.render( 
    <Calendario />,
    document.getElementById('root')
);