export interface IStateId {
    id: number;
}

export interface ITask {
    name: string;
    status: boolean;
    id: string;
}

export interface ISubTaskArray {
    name: string;
    id: string;
    taskArray: ITask[];
}

export interface IDesk {
    id: number;
    name: string;
    array: ISubTaskArray[];
}

export interface IId {
    type: string;
    payload: number;
}

export interface IDeskAction {
    type: UserListAction,
    payload: [],
}

export interface ITaskArrayAction {
    type: ITaskArrayType,
    payload: [],
}

export interface IDeskList {
    deskList: IDesk[];
}

export interface ITaskArray {
    subDeskArray: any[];
}

export enum IdAction {
    ADD_ID  = 'ADD_ID',
    REMOVE_ID = 'REMOVE_ID',
}

export enum ITaskArrayType {
    ADD_TASK_TYPE = 'ADD_TASK_TYPE',
    REMOVE_TASK_TYPE = 'REMOVE_TASK_TYPE',
}

export enum UserListAction {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
    COMPLETE = 'COMPLETE',
    REMOVE_SUB_DESK = 'REMOVE_SUB_DESK',
}

export enum SubDeskType {
    ADD_SUB_DESK = 'ADD_SUB_DESK',
    REMOVE_SUB_DESK = 'REMOVE_SUB_DESK',
}
