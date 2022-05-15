import React from 'react';
import { useField } from 'formik';

import { Input, Label, FloatError, ErrorMessage } from './styles';

export const TextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={field.name}>{label}</Label>
      <Input hasError={meta.touched && meta.error} {...field} {...props} />

      <FloatError>
        <ErrorMessage component="div" name={field.name} />
      </FloatError>
    </>
  );
};
