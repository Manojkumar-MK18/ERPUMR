import { Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import ROUTES from './const/routes'
import {
  Dashboard,
  Academic,
  Year,
  StudentRegistartion,
  AddRegistrationForm,
  FeeDescription,
  AddFeeDescription,
  FeeMaster,
  FeeReceipt,
  StudentConsession,
  ChangeStudentFee,
  Category,
  Group,
  SubGroup,
  BankList,
  LedgerList,
  BillPayment,
  ApplicationReceipt,
  AddReceipt,
  AddPayment,
  AddContra,
  AddJournal,
  BalanceSheet,
  AddRole,
  AddFeeMaster,
  LeaveMaster,
  AddLeave,
  LeaveApplication,
  LeaveApproval,
  StaffRegistration,
  AddStaffRegistration,
  Desgination,
  AddRoleUser,
  AddPrivileges,
  ViewPrivileges,
  StudentPay,
  LeaveStatus,
  LessonUpdate,
  AssignLesson,
  LessonStatus,
} from 'pages'
import ProtectedRoute from './containers/ProtectedRoute'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <ProtectedRoute path={ROUTES.DASHBORAD} component={Dashboard} />
      <ProtectedRoute path={ROUTES.ACADEMIC} component={Academic} />
      <ProtectedRoute path={ROUTES.YEAR} component={Year} />
      <ProtectedRoute
        path={ROUTES.ADDREGISTRATION}
        component={AddRegistrationForm}
      />
      <ProtectedRoute
        path={ROUTES.STUDENTREGISTRATION}
        component={StudentRegistartion}
      />
      <ProtectedRoute path={ROUTES.FEEDESCRIPTION} component={FeeDescription} />
      <ProtectedRoute
        path={ROUTES.ADDFEEDESCRIPTION}
        component={AddFeeDescription}
      />
      <ProtectedRoute path={ROUTES.FEEMASTER} component={FeeMaster} />
      <ProtectedRoute path={ROUTES.FEERECEIPT} component={FeeReceipt} />
      <ProtectedRoute
        path={ROUTES.STUDENT_CONCESSION}
        component={StudentConsession}
      />
      <ProtectedRoute
        path={ROUTES.CHANGE_STUDENT_FEE}
        component={ChangeStudentFee}
      />
      <ProtectedRoute path={ROUTES.FINANCE_CATEGORY} component={Category} />
      <ProtectedRoute path={ROUTES.FINANCE_GROUP} component={Group} />
      <ProtectedRoute path={ROUTES.FINANCE_SUB_GROUP} component={SubGroup} />
      <ProtectedRoute path={ROUTES.FINANCE_BANK_LIST} component={BankList} />
      <ProtectedRoute
        path={ROUTES.FINANCE_LEDGER_LIST}
        component={LedgerList}
      />
      <ProtectedRoute
        path={ROUTES.FINANCE_BILL_PAYMENT}
        component={BillPayment}
      />
      <ProtectedRoute
        path={ROUTES.FINANCE_APPLICATION_RECEIPT}
        component={ApplicationReceipt}
      />
      <ProtectedRoute path={ROUTES.ADD_RECEIPT} component={AddReceipt} />
      <ProtectedRoute path={ROUTES.ADD_PAYMENT} component={AddPayment} />
      <ProtectedRoute path={ROUTES.ADD_CONTRA} component={AddContra} />
      <ProtectedRoute path={ROUTES.ADD_JOURNAL} component={AddJournal} />
      <ProtectedRoute path={ROUTES.BALANCE_SHEET} component={BalanceSheet} />
      <ProtectedRoute path={ROUTES.ADD_ROLE} component={AddRole} />
      <ProtectedRoute path={ROUTES.ADD_FEE_MASTER} component={AddFeeMaster} />
      <ProtectedRoute path={ROUTES.LEAVE_MASTER} component={LeaveMaster} />
      <ProtectedRoute path={ROUTES.ADD_LEAVE} component={AddLeave} />
      <ProtectedRoute
        path={ROUTES.LEAVE_APPLICATION}
        component={LeaveApplication}
      />
      <ProtectedRoute
        path={ROUTES.LEAVE_APPLICATION}
        component={LeaveApplication}
      />
      <ProtectedRoute path={ROUTES.LEAVE_APPROVAL} component={LeaveApproval} />
      <ProtectedRoute
        path={ROUTES.STAFFREGISTRATION}
        component={StaffRegistration}
      />
      <ProtectedRoute
        path={ROUTES.ADDSTAFFREGISTRATION}
        component={AddStaffRegistration}
      />
      <ProtectedRoute path={ROUTES.DESGINATION} component={Desgination} />
      <ProtectedRoute path={ROUTES.ADD_ROLEUSER} component={AddRoleUser} />
      <ProtectedRoute path={ROUTES.ADD_PIVILEGES} component={AddPrivileges} />
      <ProtectedRoute path={ROUTES.VIEW_PIVILEGES} component={ViewPrivileges} />
      <ProtectedRoute path={ROUTES.STUDENT_PAY} component={StudentPay} />
      <ProtectedRoute path={ROUTES.LEAVE_STATUS} component={LeaveStatus} />
      <ProtectedRoute path={ROUTES.LESSON_UPDATES} component={LessonUpdate} />
      <ProtectedRoute path={ROUTES.ASSIGN_LESSON} component={AssignLesson} />
      <ProtectedRoute path={ROUTES.LESSON_STATUS} component={LessonStatus} />
    </Switch>
  )
}

export default Routes
