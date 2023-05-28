import { randomUUID } from 'crypto';
import { Socket } from 'socket.io';
import { INITIAL_STATE } from './constants';
import { RoomStateType } from './GameTypes';
import { Queue } from '@datastructures-js/queue';

class Game {
    public openRoom = new Queue<string>();
    public roomStates: { [key: string]: RoomStateType } = {}

    handleJoinGame(socket: Socket) {
        let roomId: string | null = null
        // if there if no open game avaliable - create new game session
        // @TODO [x]
        // get open games
        // @TODO [x]
        // join the new player to the game room
        // @TODO []
        // begin game interval
        if (this.openRoom.size() === 0) {
            roomId = randomUUID();
            this.roomStates[roomId] = {
                roomId, gameState: {
                    playerCount: 1,
                    playerState: [{ id: socket.id, winRounds: 0 }],
                    round: 0
                }
            }
            this.openRoom.enqueue(roomId);
            socket.join(roomId);
            socket.emit('roomCode', roomId);
        }
        else {
            const openRoomId = this.openRoom.dequeue()
            this.roomStates[openRoomId].gameState.playerCount = 2;
            this.roomStates[openRoomId].gameState.playerState.push({ id: socket.id, winRounds: 0 })
            socket.join(openRoomId);
            socket.emit('roomCode', openRoomId);
        }
        this.startGameInterval()
    }

    startGameInterval() {
        const intervalId = setInterval(() => {

        }, 1000)
    }

}