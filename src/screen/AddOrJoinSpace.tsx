import { AddBox, ScreenShare } from "@mui/icons-material";
import text from "@constant/text";
import TabsWithIcons from "@component/tab/TabsWithIcons";

const AddOrJoinSpace = () => {
  const tabs = [{
    icon: AddBox,
    ...text.addOrJoinSpace.add
  }, {
    icon: ScreenShare,
    ...text.addOrJoinSpace.join
  }];

  const tabContents = [
    <div>Test</div>,
    <div>Another</div>
  ]

  return (
    <TabsWithIcons tabs={tabs} tabContents={tabContents}/>
  );
};

export default AddOrJoinSpace;
