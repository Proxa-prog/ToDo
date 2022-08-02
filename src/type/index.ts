export interface IStateId {
    id: number;
}

export enum IdAction {
    ADD_ID  = 'ADD_ID',
    REMOVE_ID = 'REMOVE_ID',
}

export interface IId {
    type: string;
    payload: number;
}