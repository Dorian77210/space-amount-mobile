import HomeHeader from "@component/header/HomeHeader";
import text from "@constant/text";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { OpenInNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const [spaceAmounts] = useState<string[]>([
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
    "TEST",
  ]);

  const handleAccessToSpace = () => {
    console.log("Access to space");
  };

  const handleCreateOrJoinSpace = () => {
    navigate('/create-or-join');
  }

  return (
    <>
      <HomeHeader />
      <Box
        sx={{
          width: "100%",
        }}
      >
        <List
          sx={{
            width: "100%",
          }}
        >
          {spaceAmounts.map((spaceAmount, index) => {
            return (
              <Box
                key={index}
                sx={(theme) => ({
                  borderBottom: `1px solid ${theme.palette.grey[700]}`,
                })}
              >
                <ListItem
                  alignItems="flex-start"
                  secondaryAction={
                    <IconButton
                      edge="start"
                      aria-label="access"
                      onClick={handleAccessToSpace}
                    >
                      <OpenInNew color="info" fontSize="large" />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={spaceAmount}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="white"
                        >
                          {text.home.emptyDescription}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
              </Box>
            );
          })}
        </List>
      </Box>
      <Button
        variant="contained"
        sx={{
          height: 65,
          borderRadius: 10,
          position: 'fixed',
          bottom: 10,
          right: 10,
        }}
        onClick={handleCreateOrJoinSpace}
      >
        <Typography fontSize="20px">+</Typography>
      </Button>
    </>
  );
};

export default HomeScreen;
