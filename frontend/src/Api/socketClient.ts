/**
 * Socket Client
 * @author Mohammed Arqam Ali Saad <arqam.ali16@gmail.com>
 */
import io from "socket.io-client";

/**
 * Socket client to recieve live rates on some interval
 * @constant socketClient
 */
const socketClient = io(process.env.REACT_APP_API_BASE_URL as string);

export default socketClient;
