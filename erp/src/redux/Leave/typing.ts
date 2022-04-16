import { Dropdown } from '../typings'

export type DropdownList = Array<Dropdown>

export interface LeaveState {
    encassable: DropdownList
    leaveType: DropdownList
}