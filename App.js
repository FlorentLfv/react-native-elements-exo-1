import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Header, SearchBar, Avatar, ListItem } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const [value, setValue] = React.useState("");
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Header
          backgroundColor="blue"
          backgroundImageStyle={{}}
          barStyle="default"
          centerComponent={{
            text: "Apprenants de La Manu",
            style: { color: "#fff", fontSize: 20 }
          }}
          centerContainerStyle={{}}
          containerStyle={{ width: '100%', height: 125 }}
          leftComponent={{ icon: "menu", color: "#fff",  size: 40, marginLeft: 10 }}
          leftContainerStyle={{}}
          linearGradientProps={{}}
          placement="center"
          rightContainerStyle={{}}
          statusBarProps={{}}
        />
        <SearchBar
          platform="default"
          containerStyle={{ backgroundColor: 'white' }}
          inputContainerStyle={{ backgroundColor: '#E2E2E2', marginBottom: 20 }}
          inputStyle={{}}
          leftIconContainerStyle={{ height: 50, width: 25, }}
          rightIconContainerStyle={{}}
          lightTheme
          loadingProps={{}}
          onChangeText={newVal => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="ex. John Doe"
          placeholderTextColor="grey"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => console.log(onCancel())}
          value={value}
        />
        <ScrollView>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
          <JohnItem></JohnItem>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const JohnItem = () => {
  return (
    <ListItem
      Component={TouchableHighlight}
      containerStyle={{}}
      disabledStyle={{ opacity: 0.5 }}
      onLongPress={() => console.log("onLongPress()")}
      onPress={() => console.log("onPress()")}
      pad={20}
      topDivider
    >
      <Avatar
        activeOpacity={1}
        avatarStyle={{}}
        containerStyle={{ backgroundColor: "#BDBDBD" }}
        icon={{}}
        iconStyle={{}}
        imageProps={{}}
        onLongPress={() => alert("onLongPress")}
        onPress={() => alert("onPress")}
        overlayContainerStyle={{}}
        placeholderStyle={{}}
        rounded
        size="large"
        title="JD"
        titleStyle={{ color: 'black', fontSize: 30 }}
      />
      <ListItem.Content>
        <ListItem.Title>
          <Text style={{ fontSize: 20 }}>John Doe</Text>
        </ListItem.Title>
        <ListItem.Subtitle>
          <Text style={{ fontSize: 20, color: 'grey' }}>Appli Mobile P1</Text>
        </ListItem.Subtitle>
      </ListItem.Content>
      <Icon
        containerStyle={{}}
        disabledStyle={{}}
        iconProps={{}}
        iconStyle={{}}
        name="chevron-right"
        onLongPress={() => console.log("onLongPress()")}
        onPress={() => console.log("onPress()")}
        size={40}
        type="FontAwesome"
      />
    </ListItem>
  )
}