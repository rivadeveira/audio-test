import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const FileListItem = ({ file }) => (
    <tr className="file-list-item" key={file.id}>
        <td className="file-name">{file.name}</td>
    </tr>
);
FileListItem.propTypes = {
    files: PropTypes.object.isRequired
}

const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem key={file.id} file={file} />       
            ))}
        </tbody>
    </table>
);
FileList.propTypes = {
    files: PropTypes.array
};

const testFiles = [
    {
        id: 1,
        name: 'test1.mp3',
        blob: '',
        updated_at: "2016-07-18 21:24:00",
    },
    {
        id: 2,
        name: 'test2.ogg',
        blob: '',
        updated_at: "2017-07-18 21:24:00",
    },
];

ReactDOM.render(<FileList files={testFiles} />, document.getElementById('root'));