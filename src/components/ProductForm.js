import React from 'react';
import { Formik, Form, Field } from 'formik';

const ProductForm = () => {

  const proposeSendEgld = (values) => {
    console.log(values);
  }

  return (
    <div>
     <h1>My Form</h1>
      <Formik
      initialValues={{
        address: '',
        amount: '',
      }}
      onSubmit={proposeSendEgld}>
      <Form>
        <label htmlFor="adddress">Addresse</label>
        <Field id="address" name="address" placeholder="Put the addresse here..." />

        <label htmlFor="amount">Amount</label>
        <Field id="amount" name="amount" placeholder="Amount here..." />

        <button type="submit">Propose</button>
      </Form>
    </Formik>
    </div>
  );
};

export default ProductForm;
