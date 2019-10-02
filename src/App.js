import React, {useState} from 'react';
import './App.css';
import { file } from '@babel/types';

function App() {
  const [files, setState] = useState([]);
  const [contentText, setContent] = useState('');

  const initWatcher = async (e) => {
    e.preventDefault();
    const opts = { type: 'openDirectory' };
    const handle = await window.chooseFileSystemEntries(opts);
    

    const st = setInterval(async () => {
      const fileList = [];
      const entries = await handle.getEntries();
    for await (const entry of entries) {
      fileList.push(entry);
    }
    setState(fileList);
    }, 1000);
  }

  const getContent = (f) => async () => {
    if (f.isFile) {
      const content = await f.getFile();
      const reader = new FileReader();
      reader.onload = (e) => {
        setContent(reader.result);
      }
      reader.readAsText(content);
    }
  }

  return (
    <div className="App">
      <div style={
        {
          'border': '1px solid #000',
          'margin': '0 auto',
          'marginTop': '40px',
          'marginBottom': '20px',
          'padding': '20px 30px',
          'width': '100px',
        }
      } onClick={initWatcher}>Click Me to Select Directory</div>
      <div style={
        {
          'marginBottom': '30px',
        }
      }>{contentText}</div>
      <div>
        {files.map(f => (<div onClick={getContent(f)}>{f.name}</div>))}
      </div>
    </div>
  );
}

export default App;
