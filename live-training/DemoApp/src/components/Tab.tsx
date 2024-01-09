import { Button, View } from 'react-native';

interface TabProps {
  tabItems: string[];
  currentTabItem?: string;
  onChange: (item: string) => void;
}

/// Render buttons, highlight the current view button with some different color
/// on press of button it should change the component

const Tab = (tabProps: TabProps) => {
  return (
    <View>
      {tabProps.tabItems.map((tabItem) => (
        <View
          key={tabItem}
          style={{
            borderWidth: 1,
            borderColor: tabProps.currentTabItem === tabItem ? 'red' : 'black',
          }}
        >
          <Button
            title={tabItem}
            onPress={() => {
              tabProps.onChange(tabItem);
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default Tab;
