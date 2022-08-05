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

export interface ITask {
    id: number;
    name: string[];
}

export interface ITaskList {
    taskList: ITask[];
}

export enum UserListAction {
    ADD_TASK = 'ADD_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
}

export interface IName {
    task: string;
}

export interface INameArray {
    nameArray: IName[];
}

export interface ITaskNameArray {
    taskNameArray: IName[];
}

export interface INameArrays {
    name: [];
}

export interface INameAction {
    type: string;
    payload: string[];
}

export enum nameArrayAction {
    ADD_NAME = 'ADD_NAME',
    REMOVE_NAME = 'REMOVE_NAME',
}

export enum taskNameArrayAction {
    ADD_TASK_NAME = 'ADD_NAME',
    REMOVE_TASK_NAME = 'REMOVE_NAME',
}

export enum NameArrayAction {
    ADD_TASK_NAME = 'ADD_TASK_NAME',
    REMOVE_TASK_NAME = 'REMOVE_TASK_NAME',
}

export interface IAction {
    type: NameArrayAction,
    payload: [],
}