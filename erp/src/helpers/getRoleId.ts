import { AdminId, AdminType } from 'const'

const getRoleId = (value: string): string => {
  switch (value) {
    case AdminType.SUPERADMIN:
      return AdminId.SUPERADMIN
    case AdminType.BRANCHADMIN:
      return AdminId.BRANCHADMIN
    case AdminType.INSTITUTEADMIN:
      return AdminId.INSTITUTEADMIN
    case AdminType.TEACHER:
      return AdminId.TEACHER
    case AdminType.STUDENT:
      return AdminId.STUDENT
    default:
      return ''
  }
}

export default getRoleId
