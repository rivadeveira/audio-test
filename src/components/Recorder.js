import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import RecordAudio from '..utils/RecordAudio';

function Recorder(props) {
    const [statusRec, setStatusRec] = useState('no-record');
    function handleRecord() {
        if (!statusRec) {
            setawait recordAudio();
          }
          recorder.start();
    }   
    return (
        <button onClick={handleRecord}>Record</button>
    )
}