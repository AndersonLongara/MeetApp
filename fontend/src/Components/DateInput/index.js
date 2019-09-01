import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DateInput({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        selected={selected}
        name={fieldName}
        ref={ref}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        placeholderText={placeholder}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DateInput.defaultProps = {
  placeholder: '',
};
