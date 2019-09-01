import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import { MdAddAPhoto } from 'react-icons/md';
import api from '~/services/api';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('file');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref]);//eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="file">
        {!preview && (
          <div className="icon-add">
            <MdAddAPhoto size={50} color="rgba(255, 255, 255, .7)" />
          </div>
        )}

        {preview && <img src={preview} alt="file" />}

        <input
          type="file"
          id="file"
          accept="image/*"
          data-file={file}
          ref={ref}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
