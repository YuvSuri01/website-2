"use client";

import { createContext, useState } from "react";

export const FormContext = createContext({
  isFormOpen: false,
  showForm: () => {},
  hideForm: () => {},
});

const FormContextProvider = ({ children }) => {
  const [form, setForm] = useState(false);

  const openForm = () => setForm(true);
  const closeForm = () => setForm(false);

  const value = {
    isFormOpen: form,
    showForm: openForm,
    hideForm: closeForm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
