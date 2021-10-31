import PropTypes from "prop-types";

import { useDelContactMutation } from "../../../redux/contactsSlice";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
function ContactItem({ contact: { id, name, number } }) {
  const [deleteContact, { isLoading: isDeleting }] = useDelContactMutation();

  const deleteHandle = () => deleteContact(id);

  return (
    <Card sx={{ minWidth: 275, p: 2, m: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          name
        </Typography>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          number
        </Typography>
        <Typography variant="h6" component="div">
          {number}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={deleteHandle} disabled={isDeleting}>
          {isDeleting ? "deleting..." : "DELETE"}
        </Button>
      </CardActions>
    </Card>
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
