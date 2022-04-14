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
  LeaveApproval
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
      <ProtectedRoute path={ROUTES.LEAVE_APPLICATION} component={LeaveApplication} />
      <ProtectedRoute path={ROUTES.LEAVE_APPLICATION} component={LeaveApplication} />
      <ProtectedRoute path={ROUTES.LEAVE_APPROVAL} component={LeaveApproval} />
    </Switch>
  )
}

export default Routes
