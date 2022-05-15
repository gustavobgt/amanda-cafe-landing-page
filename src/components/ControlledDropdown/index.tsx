import React from 'react';
import { Dropdown } from '../Dropdown';
import { useField } from 'formik';

import { Label, FloatError, ErrorMessage } from './styles';

export const ControlledDropdown = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={field.name}>{label}</Label>
      <Dropdown hasError={meta.touched && meta.error} {...field} {...props} />

      <FloatError>
        <ErrorMessage component="div" name={field.name} />
      </FloatError>
    </>
  );
};

ControlledDropdown.Item = Dropdown.Item;
