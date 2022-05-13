import React from 'react';
import { useField } from 'formik';

import { TextArea, Label, ErrorMessage } from './styles';

export const TextAreaInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={field.name}>{label}</Label>
      <TextArea hasError={meta.touched && meta.error} {...field} {...props} />
      <ErrorMessage component="div" name={field.name} />
    </>
  );
};
