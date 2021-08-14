import React from 'react';
import { Formik } from 'formik';
import { Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms'

const ProductFormAdvanced = () => {

  const proposeSendEgld = (values) => {
    console.log(values);
  }
  const validateForm = (values) => {
    const errors = {};
    if (!values.address) {
      errors.address = 'Required';
    }
    if (!values.amount) {
      errors.amount = 'Required';
    }
    return errors;
  }

  return (
    <Box
      sx={{
        maxWidth: 512,
        mx: 'auto',
        px: 3,
      }}>
     <h1>Formulaire avances</h1>
      <Formik
      initialValues={{
        address: '',
        amount: '',
      }}
      validate={validateForm}
      onSubmit={proposeSendEgld}>
          {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <Box>
                <Label htmlFor='address'>Address</Label>
                <Input
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    id='address'/>
                {errors.address && touched.address && errors.address}
              </Box>
              <Box>
                <Label htmlFor='amount'>Amount</Label>
                <Input
                    type="text"
                    name="amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                    id='amount'/>
                {errors.amount && touched.amount && errors.amount}
              </Box>

              <Button bg='#07c' variant="primary" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </form>
          )}
    </Formik>
    </Box>
  );
};

export default ProductFormAdvanced;
