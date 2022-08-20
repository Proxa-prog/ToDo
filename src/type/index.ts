export interface IStateId {
    id: number;
}

export interface ITask {
    name: string;
    status: boolean;
    isConfirmed: boolean;
    id: string;
}

export interface ISubTaskArray {
    name: string;
    id: string;
    taskArray: ITask[];
}

export interface IDesk {
    id: string;
    name: string;
    array: ISubTaskArray[];
}

export interface IDeskList {
    deskList: IDesk[];
}

export interface IId {
    type: string;
    payload: number;
}

export interface IDeskAction {
    type: UserListAction,
    payload: [],
}

export interface ITaskListAction {
    type: UserListAction,
    payload: [],
}

export interface ITaskArrayAction {
    type: ITaskArrayType,
    payload: [],
}

export interface ITaskCardList {
    taskCard: any[];
}

export interface ITaskCardListAction {
    type: ITaskCardListType,
    payload: IDesk[],
}

export interface ITaskList {
    taskList: ISubTaskArray[];
}

export enum ITaskArrayType {
    ADD_TASK_TYPE = 'ADD_TASK_TYPE',
    REMOVE_TASK_TYPE = 'REMOVE_TASK_TYPE',
}

export enum ITaskCardListType {
    ADD_DESK = 'ADD_DESK',
    REMOVE_DESK = 'REMOVE_DESK',
}

export enum UserListAction {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
    COMPLETE = 'COMPLETE',
    ADD_STORE_IN_LOCAL_STORAGE = 'ADD_STORE_IN_LOCAL_STORAGE',
    REMOVE_SUB_DESK = 'REMOVE_SUB_DESK',
}

export enum SubDeskType {
    ADD_SUB_DESK = 'ADD_SUB_DESK',
    REMOVE_SUB_DESK = 'REMOVE_SUB_DESK',
}
