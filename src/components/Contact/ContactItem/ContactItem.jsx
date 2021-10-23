import PropTypes from "prop-types";
import { StyledContact } from "./ContactItem.styled";
import { useDelContactMutation } from "../../../redux/contactsSlice";
function ContactItem({ contact: { id, name, number } }) {
  const [deleteContact, { isLoading: isDeleting }] = useDelContactMutation();

  const deleteHandle = () => deleteContact(id);

  return (
    <StyledContact>
      {name}: {number}
      <button onClick={deleteHandle} disabled={isDeleting}>
        {isDeleting ? "deleting..." : "delete"}{" "}
      </button>
    </StyledContact>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
  onDelete: PropTypes.func,
};

export default ContactItem;
