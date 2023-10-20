import { TextField } from "@mui/material";

interface WhiteTextField {
  label: string;
  value: string;
  multiline?: boolean;
  helperText?: string;
  minRows?: number;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: boolean;
}

const WhiteTextField = ({
  label,
  value,
  onChange,
  multiline = false,
  minRows = 3,
  helperText,
  error,
}: WhiteTextField) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={(ev) => onChange(ev)}
      multiline={multiline}
      minRows={minRows}
      inputProps={{ style: { color: "white" } }}
      error={error}
      helperText={helperText}
      sx={{
        mt: 3,
        label: { color: "white" },
        "& label.Mui-focused": {
          color: "grey",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "white",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white",
          },
          "&:hover fieldset": {
            borderColor: "white",
          },
          "&.Mui-focused fieldset": {
            borderColor: "white",
          },
          "& .MuiInputBase-root": {
            color: "white",
          },
        },
      }}
    />
  );
};

export default WhiteTextField;
