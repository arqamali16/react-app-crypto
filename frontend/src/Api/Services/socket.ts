import _ from "lodash";
import { Dispatch } from "react";

import socketClient from "../../Api/socketClient";

import { IRate } from "../../Interfaces/home.interface";
import { MessageInstance } from "antd/es/message/interface";

const registerSocketEvents = (
  setLiveRates: Dispatch<IRate[]>,
  messageApi: MessageInstance
) => {
  /**
   * Event listner to recive live rate onse connection is done
   */
  socketClient.on("connect", () => {
    console.log("Connection from client successful!");
    socketClient.emit("newMessageCS", { msg: "Connected!" });
  });

  /**
   * Event listner to recive upates rates on every interval
   */
  socketClient.on("onMessageCS", (message) => {
    if (_.get(message, "msg.msg")) {
      setLiveRates(_.get(message, "msg.msg"));
      messageApi.success("Exchange prices updated!");
    }
  });
};

export { registerSocketEvents };
