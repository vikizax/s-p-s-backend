export type PlayerState = {
    id: string,
    winRounds: number;
}

export interface IGameState {
    playerCount: number;
    playerState: PlayerState[];
    round: number
}

export interface RoomStateType {
    gameState: IGameState
    roomId: string;
}