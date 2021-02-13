import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextareaAutosize, Button } from '@material-ui/core';

import css from './style.css';

function PlaintextEditor({ file, write }) {
  const [content, setContent] = useState('');
  useEffect(() => {
    const readFileContent = async () => {
      try {
        const content = await file.text();
        setContent(content);
      } catch (err) {
        console.log(err);
      }
    };
    readFileContent();
  }, [file]);
  const handleContentChange = e => {
    setContent(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const newFile = {
      name: file.name,
      content: content
    };
    write(newFile);
  };
  return (
    <div className={css.editor}>
      <h3>TODO</h3>
      <i>text/plain</i>
      <form onSubmit={handleSubmit}>
        <TextareaAutosize
          onChange={handleContentChange}
          value={content}
          style={{ width: '100%' }}
        />
        <Button type="submit" variant="outlined">
          submit
        </Button>
      </form>
    </div>
  );
}

PlaintextEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default PlaintextEditor;
