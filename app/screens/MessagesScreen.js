import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import Screen from "./../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "./../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "ggjkjrr gr jgfijgijrijgijs gjsjgf sjfgjjgijrijjgjj ;s jsorio;vmsjg ",
    description: "ajflawepeiruf dj;lskjfwuqoweiury  a d hfehu",
    image: require("../assets/random_person.jpg"),
  },
  {
    id: 2,
    title: "jeiruour frf aow fa aow orf  j jlkj",
    description: "fjeo w jee9  fjiajeijfoi ejfeijfowi iowjoieohforio",
    image: require("../assets/random_person.jpg"),
  },
  // {
  //   id: 3,
  //   title: "T3",
  //   description: "D3",
  //   image: require("../assets/random_person.jpg"),
  // },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefresh] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected")}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => {
                  handleDelete(item);
                  console.log(item);
                }}
              />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title:
                "This is amazing coz I got to play a role in all bla bla bla bla bla bla bla",
              description:
                "I like it like it like that, I like like it like that",
              image: require("../assets/random_person.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight },
});
