import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { changeFilter } from "../../redux/contacts/filter/contacts-filter-actions";
import { TextField } from "@mui/material";

function Filter() {
  const filterStr = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <TextField
      label="Find contacts by name"
      name="filter"
      onChange={(e) => dispatch(changeFilter(e.target.value.toLowerCase()))}
      sx={{ mt: 2 }}
    >
      {filterStr}
    </TextField>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
};

export default Filter;
