import { SvgIconComponent } from "@mui/icons-material";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

interface TabsWithIconsProps {
  tabs: {
    icon: SvgIconComponent;
    label: string;
    ariaLabel?: string;
  }[];
  selectedColor?: string;
  unselectedColor?: string;
  tabContents: JSX.Element[];
}

const TabsWithIcons = ({
  tabs,
  selectedColor = "white",
  unselectedColor = "grey",
  tabContents,
}: TabsWithIconsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setSelectedTab(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                icon={
                  <tab.icon
                    sx={{
                      color:
                        index === selectedTab ? selectedColor : unselectedColor,
                    }}
                  />
                }
                aria-label={tab.ariaLabel}
                value={index}
                label={
                  <Typography
                    color={
                      index === selectedTab ? selectedColor : unselectedColor
                    }
                    variant="caption"
                  >
                    {tab.label}
                  </Typography>
                }
              />
            );
          })}
        </Tabs>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        {tabContents.map((tab, index) => {
          return (
            <Box key={index}>
              <CustomTabPanel value={selectedTab} index={index}>
                {tab}
              </CustomTabPanel>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default TabsWithIcons;
