import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Spacer,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { GiPlantsAndAnimals } from "react-icons/gi";

import FarmerSide from "../../components/FarmerSide";
import moment from "moment";
import { db } from "../../firebaseConfig";
import shortid from "shortid";
import { MainStateContext } from "../../MainContext";
import Navbar from "../../components/Navbar";

function ChatFarmer() {
  const { user } = useContext(MainStateContext);

  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [messages, setMessages] = useState([]);

  console.log("USER  IS:", user);

  React.useEffect(() => {
    setLoading(true);

    // execute query
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let list = [];
      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          const n = { id: doc.id, ...doc.data() };
          list.push(n);
        } else {
          setMessages({ messages: [] });
        }
        setMessages(list);
        setLoading(false);
      });
    });
    return () => unsub();
  }, []);

  const handleMessageChange = (e) => {
    const messo = {
      text: e?.target?.value,
      sentAt: new Date().toISOString(),
      sender_id: user?._id,
      sender_name: user?.name,
      createdAt: serverTimestamp(),
    };
    setNewMessage(messo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewMessage({ text: "" });
    saveMessage();
  };

  async function saveMessage() {
    const id = shortid.generate();
    await setDoc(doc(db, "messages", id), {
      ...newMessage,
    });
  }

  return (
    <Box bg={"gray.100"} minHeight={"95vh"}>
      <Navbar />

      <Flex>
        <FarmerSide />
        <Flex
          // bg={"gray.200"}
          // bg={"green.50"}
          w={"100%"}
          padding={5}
          gap={6}
          direction={"column"}
          overflowY={"scroll"}
          position={"relative"}
          // maxH={"80vh"}
        >
          <Box
            h={"full"}
            overflowY={"scroll"}
            p={"1"}
            bg={"white"}
            maxHeight={"560px"}
            mb={"4"}
          >
            {messages?.map((message) => (
              <MessageItem
                senderName={message?.sender_name}
                message={message.text}
                timeSent={message.sentAt}
                floatingPosition={message.sender_id === user?._id && "flex-end"}
              />
            ))}
          </Box>
          <form onSubmit={handleSubmit}>
            <Flex
              borderWidth={"1"}
              h={"14"}
              bg={"green.100"}
              borderRadius={"xl"}
              position={"absolute"}
              bottom={"2"}
              right={"9"}
              left={"5"}
            >
              <Input
                value={newMessage?.text}
                onChange={handleMessageChange}
                p={"2"}
                h={"full"}
                borderWidth={0}
                placeholder={"Type message here ..."}
              />

              <Button
                h={"full"}
                bg={"none"}
                borderRadius={"none"}
                _hover={{ bg: "gray.50" }}
                type={"submit"}
              >
                <FiSend />
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ChatFarmer;

const MessageItem = ({ message, senderName, timeSent, floatingPosition }) => (
  <Flex justifyContent={floatingPosition} p={"1"}>
    <Box maxWidth={"50%"}>
      <Text fontWeight={"semibold"} fontSize={"xs"}>
        {senderName}
      </Text>
      <Box
        borderRadius={"md"}
        py={"1"}
        px={"2"}
        bg={"green.200"}
        flexGrow={"0"}
        display={"block"}
      >
        <Text fontWeight={"medium"}>{message}</Text>

        <Text fontSize={"xs"}>{moment(timeSent).fromNow()}</Text>
      </Box>
    </Box>
  </Flex>
);
