import WhiteTextField from "@component/TextField/WhiteTextField";
import text from "@constant/text";
import useCurrency from "@hook/useCurrency";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

const initialState = {
  name: "",
  description: "",
  currency: "",
};

const AddSpaceForm = () => {
  const [form, setForm] = useState<typeof initialState>(initialState);
  const [errors, setErros] = useState({
    name: false,
    description: false,
    currency: false,
  });

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const currencies = useCurrency();

  const handleInput = (value: string, key: keyof typeof initialState) => {
    setForm((prevState) => ({
      ...prevState,
      [key]: value.trim(),
    }));
  };

  useEffect(() => {
    setErros({
      name: !form.name,
      description: !form.description,
      currency: !form.currency,
    });
  }, [form]);

  useEffect(() => {
    const disabled = errors.currency || errors.description || errors.currency;
    setIsDisabled(disabled);
  }, [errors]);

  const handleClearForm = () => {
    setForm(initialState);
  }

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        mt: 3,
      }}
    >
      <Box sx={{ display: "flex" }} flexDirection="column" mb={3}>
        <Typography variant="caption">
          {text.addOrJoinSpace.form.name.caption}
        </Typography>
        <WhiteTextField
          label={text.addOrJoinSpace.form.name.label}
          onChange={(ev) => handleInput(ev.target.value, "name")}
          value={form.name}
        />
      </Box>

      <Box sx={{ display: "flex" }} flexDirection="column" mb={3}>
        <Typography variant="caption">
          {text.addOrJoinSpace.form.description.caption}
        </Typography>
        <WhiteTextField
          label={text.addOrJoinSpace.form.description.label}
          onChange={(ev) => handleInput(ev.target.value, "description")}
          value={form.description}
          multiline
        />
      </Box>

      <Box sx={{ display: "flex" }} flexDirection="column" mb={3}>
        <Typography variant="caption">
          {text.addOrJoinSpace.form.currency.caption}
        </Typography>
        <Select
          value={form.currency}
          onChange={(ev) => handleInput(ev.target.value, "currency")}
          sx={{
            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
        >
          {currencies.map((currency) => {
            return (
              <MenuItem key={currency.symbol} value={currency.symbol}>
                {currency.name}
              </MenuItem>
            );
          })}
        </Select>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disabled={isDisabled}
            color="primary"
          >
            { text.addOrJoinSpace.form.buttons.submit }
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleClearForm}
          >
            { text.addOrJoinSpace.form.buttons.clear }
          </Button>
      </Box>
    </Box>
  );
};

export default AddSpaceForm;
