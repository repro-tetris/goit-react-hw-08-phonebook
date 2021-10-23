import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Label } from "./Filter.styled";
import { changeFilter } from "../../redux/contacts/filter/contacts-filter-actions";

function Filter() {
  const filterStr = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <input
        name="filter"
        value={filterStr}
        onChange={(e) => dispatch(changeFilter(e.target.value.toLowerCase()))}
      ></input>
    </Label>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
};

export default Filter;
