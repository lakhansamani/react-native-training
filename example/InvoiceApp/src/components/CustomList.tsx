import React, { ReactNode, FC, ReactElement } from 'react';
import { FlatList, Pressable, View } from 'react-native';

type Orientation = 'horizontal' | 'vertical';

interface CustomListProps {
  items: any[];
  orientation: Orientation;
  itemView: (item: any) => ReactNode | ReactElement;
  onPressItemView: (item: any) => void;
}

export const CustomList: FC<CustomListProps> = (props) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: props.orientation === 'horizontal' ? 'row' : 'column',
      }}
    >
      {props.items.map((item) => (
        <Pressable
          onPress={() => {
            props.onPressItemView(item);
          }}
        >
          {props.itemView(item)}
        </Pressable>
      ))}
    </View>
  );
};

export const CustomFlatList: FC<CustomListProps> = (props) => {
  return (
    <FlatList
      data={props.items}
      horizontal={props.orientation === 'horizontal'}
      renderItem={(renderItemInfo) =>
        props.itemView(renderItemInfo.item) as ReactElement
      }
    />
  );
};
