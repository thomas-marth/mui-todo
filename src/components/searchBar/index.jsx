import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";

function SearchBar({ value = "", onChange = () => {} }) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      placeholder="Поиск"
      variant="outlined"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
      sx={{
        backgroundColor: "rgba(103, 80, 164, 0.05)",
        borderRadius: 28,
        outline: 0,
      }}
    />
  );
}

export default SearchBar;
