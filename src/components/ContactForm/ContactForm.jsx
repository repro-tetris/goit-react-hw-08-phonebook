import { useState } from "react";
import PropTypes from "prop-types";
import { Label } from "./ContactForm.styled";
import { useAddContactMutation } from "../../redux/contactsSlice";

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
    <form onSubmit={handleSubmit}>
      <Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
      </Label>

      <Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
        />
      </Label>
      <input
        disabled={isAdding}
        type="submit"
        value={isAdding ? "Adding contact..." : "Add contact"}
      />
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
