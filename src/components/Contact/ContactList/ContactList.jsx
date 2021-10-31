import { ContactItem } from "../../Contact";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useGetContactsQuery } from "../../../redux/contactsSlice";
import { Grid } from "@mui/material";

const ContactList = () => {
  const filter = useSelector((state) => state.filter);
  const {
    data: contacts = [],
    isError,
    error,
    isFetching,
  } = useGetContactsQuery();

  const filteredContacts = getFiltered(filter, contacts);
  if (isError) return <div>An error has occurred! {error.data}</div>;

  return (
    <div>
      {isFetching && <p>Loading...</p>}
      <Grid container spacing={2} p={2}>
        {filteredContacts.map((contact) => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </Grid>
    </div>
  );
};

const getFiltered = (filter, items) => {
  return filter
    ? items.filter((contact) => contact.name.toLowerCase().includes(filter))
    : items;
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDelete: PropTypes.func,
};
export default ContactList;
