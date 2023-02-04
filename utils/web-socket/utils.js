import { BASE_URL } from "../../api";

const wsHandler = ({
    path,
    dependentFunc,
}) => {
    const { updateData } = dependentFunc

    const ws = new WebSocket(
        `wss://${BASE_URL}/websocket-api/${path}`
    );

    ws.onopen = () => {
        console.log("Connection Established!")
    }

    ws.onmessage = (event) => {
        let res

        try {
            res = event.data
            const response = JSON.parse(event.data)
            console.log('ws res: ', response)
            updateData(response)
        } catch (e) {
            console.log('error', e)
            console.log(res);
        }
    }

    ws.onclose = () => {
        console.log("Connection Closed!")
    }

    ws.onerror = (e) => {
        console.log("WS Error", e) 
    }

    return ws
}

export default wsHandler