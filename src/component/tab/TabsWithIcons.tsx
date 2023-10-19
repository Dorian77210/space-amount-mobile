import { SvgIconComponent } from "@mui/icons-material";
import { Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

interface TabsWithIconsProps {
  tabs: {
    icon: SvgIconComponent;
    label: string;
    ariaLabel?: string;
  }[];
  selectedColor?: string;
  unselectedColor?: string;
}

const TabsWithIcons = ({ tabs, selectedColor = "white", unselectedColor = "grey" }: TabsWithIconsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setSelectedTab(newValue);
  };

  return (
    <Tabs value={selectedTab} onChange={handleChange} centered>
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            icon={<tab.icon sx={{ color: index === selectedTab ? selectedColor : unselectedColor}}/>}
            aria-label={tab.ariaLabel}
            value={index}
            label={
              <Typography color={index === selectedTab ? selectedColor : unselectedColor}>
                {tab.label}
              </Typography>
            }
          />
        );
      })}
    </Tabs>
  );
};

export default TabsWithIcons;
