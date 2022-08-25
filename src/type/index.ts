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
    isProgress: boolean;
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
    isProgress: boolean;
}

export interface ITaskCardListAction {
    type: ITaskCardListType,
    payload: IDesk[],
}

export interface ITaskList {
    taskList: ISubTaskArray[];
}

export interface IColor {
    color: string;
    title: string;
}

export interface IColorArray {
    colors: any[];
}

export interface IColorAction {
    type: ColorType,
    payload: any,
}

export enum ITaskArrayType {
    ADD_TASK_TYPE = 'ADD_TASK_TYPE',
    REMOVE_TASK_TYPE = 'REMOVE_TASK_TYPE',
}

export enum ITaskCardListType {
    ADD_DESK = 'ADD_DESK',
    REMOVE_DESK = 'REMOVE_DESK',
    GET_DESK_LIST_REQUEST = 'GET_DESK_LIST_REQUEST',
    GET_DESK_LIST_SUCCESS = 'GET_DESK_LIST_SUCCESS',
    GET_DESK_LIST_ERROR = 'GET_DESK_LIST_ERROR',
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

export enum ColorType {
    ADD_COLOR = 'ADD_COLOR',
}
