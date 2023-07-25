import { useState, useEffect, useMemo } from "react";

export const useForm = (initialForm = {}, formValidation = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidations, setFormValidations] = useState({});

  useEffect(() => {
    onValidate();
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValidator of Object.keys(formValidations)) {
      if (formValidations[formValidator] != null) return false;
      return true;
    }
  }, [formValidations]);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onReset = () => {
    setFormState(initialForm);
  };

  const onValidate = () => {
    let formCheckedValues = {};
    for (const formField of Object.keys(formValidation)) {
      const [validateFn, errorMessage] = formValidation[formField];
      formCheckedValues[`${formField}Valid`] = validateFn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidations(formCheckedValues);
  };

  return {
    ...formState,
    ...formValidations,
    formState,
    onInputChange,
    onReset,
    isFormValid,
  };
};
