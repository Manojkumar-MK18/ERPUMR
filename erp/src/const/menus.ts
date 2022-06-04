import { Menu } from 'containers/SideNavigation/typings'
import ROUTES from './routes'

const admin: Array<Menu> = [
  {
    icon: ['fas', 'home'],
    label: 'Home',
    to: ROUTES.DASHBORAD
  },
  {
    icon: ['fas', 'database'],
    label: 'Settings',
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: 'Add Role',
        to: ROUTES.ADD_ROLE
      },
      {
        icon: ['fas', 'bars'],
        label: 'View Privileges',
        to: ROUTES.VIEW_PIVILEGES
      }
    ]
  },
  {
    icon: ['fas', 'user-check'],
    label: 'Admissions',
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: 'Student Registration',
        to: ROUTES.STUDENTREGISTRATION
      }
    ]
  },
  {
    icon: ['fas', 'university'],
    label: 'FMS',
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: 'Fee Description',
        to: ROUTES.FEEDESCRIPTION
      },
      {
        icon: ['fas', 'bars'],
        label: 'Fee Master',
        to: ROUTES.FEEMASTER
      },
      {
        icon: ['fas', 'bars'],
        label: 'Fee Receipt',
        to: ROUTES.FEERECEIPT
      },
      {
        icon: ['fas', 'bars'],
        label: 'Student Concession',
        to: ROUTES.STUDENT_CONCESSION
      },
      {
        icon: ['fas', 'bars'],
        label: 'Change Student Fee',
        to: ROUTES.CHANGE_STUDENT_FEE
      }
    ]
  },
  {
    icon: ['fas', 'university'],
    label: 'Finance',
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: 'Group Category',
        to: ROUTES.FINANCE_CATEGORY
      },
      {
        icon: ['fas', 'bars'],
        label: 'Group',
        to: ROUTES.FINANCE_GROUP
      },
      {
        icon: ['fas', 'bars'],
        label: 'Sub-Group',
        to: ROUTES.FINANCE_SUB_GROUP
      },
      {
        icon: ['fas', 'bars'],
        label: 'Bank Master',
        to: ROUTES.FINANCE_BANK_LIST
      },
      {
        icon: ['fas', 'bars'],
        label: 'Add Receipt',
        to: ROUTES.ADD_RECEIPT
      },
      {
        icon: ['fas', 'bars'],
        label: 'Ledger List',
        to: ROUTES.FINANCE_LEDGER_LIST
      },
      {
        icon: ['fas', 'bars'],
        label: 'Bill Payment',
        to: ROUTES.FINANCE_BILL_PAYMENT
      },
      {
        icon: ['fas', 'bars'],
        label: 'Application Receipt',
        to: ROUTES.FINANCE_APPLICATION_RECEIPT
      },
      {
        icon: ['fas', 'bars'],
        label: 'Payment',
        to: ROUTES.ADD_PAYMENT
      },
      {
        icon: ['fas', 'bars'],
        label: 'Contra',
        to: ROUTES.ADD_CONTRA
      },
      {
        icon: ['fas', 'bars'],
        label: 'Journal',
        to: ROUTES.ADD_JOURNAL
      },
      {
        icon: ['fas', 'bars'],
        label: 'Balance Sheet',
        to: ROUTES.BALANCE_SHEET
      }
    ]
  },
  {
    icon: ['fas', 'book'],
    label: 'Lesson Plan',
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: 'Lesson Updates',
        to: ROUTES.LESSON_UPDATES
      },
      {
        icon: ['fas', 'bars'],
        label: 'Assign Lesson',
        to: ROUTES.ASSIGN_LESSON
      },
      {
        icon: ['fas', 'bars'],
        label: 'Lesson Status',
        to: ROUTES.LESSON_STATUS
      }
    ]
  },
  {
    icon: ['fas', 'user-tie'],
    label: 'HRMS',
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: 'Department',
        to: ROUTES.LEAVE_MASTER
      },
      {
        icon: ['fas', 'bars'],
        label: 'Designation',
        to: ROUTES.DESGINATION_LIST
      },
      {
        icon: ['fas', 'bars'],
        label: 'Staff Registration',
        to: ROUTES.STAFFREGISTRATION
      },
      {
        icon: ['fas', 'bars'],
        label: 'Leave Master',
        to: ROUTES.LEAVE_MASTER
      },
      {
        icon: ['fas', 'bars'],
        label: 'Leave Application',
        to: ROUTES.LEAVE_APPLICATION
      },
      {
        icon: ['fas', 'bars'],
        label: 'Leave Approval',
        to: ROUTES.LEAVE_APPROVAL
      },
      {
        icon: ['fas', 'bars'],
        label: 'Leave Status',
        to: ROUTES.LEAVE_STATUS
      },
      {
        icon: ['fas', 'bars'],
        label: 'Staff Management',
        to: ROUTES.STAFF_ATTENANCE
      }
    ]
  },
  {
    icon: ['fas', 'clipboard-list'],
    label: 'Report Module',
    to: '',
    childs: [
      {
        icon: ['fas', 'bars'],
        label: 'Day Book Report',
        to: ROUTES.DAYBOOK_REPORT
      }
    ]
  }
]

const menus = {
  admin: admin
}

export default menus
