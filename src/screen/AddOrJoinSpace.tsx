import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const AddOrJoinSpace = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setSelectedTab(newValue);
  };

  return (
    <Tabs value={selectedTab} onChange={handleChange} centered>
      <Tab
        icon={<PhoneIcon color="secondary" />}
        aria-label="phone"
        sx={{ width: "33%" }}
      />
      <Tab icon={<FavoriteIcon color="secondary" />} aria-label="favorite" />
      <Tab icon={<PersonPinIcon color="secondary" />} aria-label="person" />
    </Tabs>
  );
};

export default AddOrJoinSpace;
