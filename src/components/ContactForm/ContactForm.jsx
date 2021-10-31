import { useState } from "react";
import PropTypes from "prop-types";
import { useAddContactMutation } from "../../redux/contactsSlice";
import { Button, Stack, TextField } from "@mui/material";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [addContact, { isLoading: isAdding }] = useAddContactMutation();
  const handleChange = ({ target: { name, value } }) => {
    if (name === "name") {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <Stack
      spacing={2}
      component="form"
      sx={{ p: 2, border: "1px dashed grey", mt: 2 }}
      onSubmit={handleSubmit}
    >
      <TextField
        name="name"
        label="Name"
        type="text"
        required
        onChange={handleChange}
      />
      <TextField
        name="number"
        label="Number"
        type="tel"
        required
        onChange={handleChange}
      />

      <Button
        color="secondary"
        variant="contained"
        disabled={isAdding}
        type="submit"
      >
        {isAdding ? "Adding contact..." : "Add contact"}
      </Button>
    </Stack>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
