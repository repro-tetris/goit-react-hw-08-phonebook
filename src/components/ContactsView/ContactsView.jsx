import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../Contact/ContactList/ContactList";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export const ContactsView = () => {
  return (
    <>
      <ContactForm />
      <Box sx={{ p: 2, mt: 2, border: "1px dotted gray" }}>
        <Typography variant="h4">Contacts</Typography>
        <Filter />
        <ContactList />
      </Box>
    </>
  );
};
