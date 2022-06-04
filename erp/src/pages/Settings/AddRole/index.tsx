import { ReactElement, useState } from 'react'
import strings from 'locale/en'
import {
  FlexWrapper,
  PageWrapper,
  SectionTitle,
  Input,
  Button,
  TableHeader,
  TableRow,
} from 'components'
import { CheckBoxWrapper, TableDisplayWrapper } from './subcomponent'
import { TableWrapper } from '../../../components/PrivilegesTable'
import { Form, Table } from "react-bootstrap"
import { dataList1, tableHeader } from './const'
import { useDispatch } from 'react-redux'
import { saveRole } from 'redux/settings/api'

const AddRole = (): ReactElement => {

  const {
    role: { addRole, addRolePlaceholder, addRoleLabel },
    button: { save }
  } = strings

  const [isSelectAll, setIsSelectAll] = useState(false)
  const [isSingleSelect, setIsSingleSelect] = useState<Array<any>>([]);
  const [list] = useState(dataList1);

  const dispatch = useDispatch()

  const handleSelectAll = () => {
    setIsSelectAll(!isSelectAll);
    setIsSingleSelect(list.map((li) => li?.name))
    if (isSelectAll) {
      setIsSingleSelect([]);
    }
  };

  const handleClick = (e: any) => {
    const { name, checked } = e.target;
    setIsSingleSelect([...isSingleSelect, name]);
    if (!checked) {
      setIsSingleSelect(isSingleSelect.filter(item => item !== name));
    }
  };


  return (
    <PageWrapper id="container">
      <SectionTitle title={addRole} hasBorder />
      <FlexWrapper>
        <Input
          label={addRoleLabel}
          placeholder={addRolePlaceholder}
          value={''}
          onBlur={() => { }}
          error={''}
          width="30%"
          onChange={(value: string) => {
            console.log(value)
          }}
          height="72px"
        />
        <Button
          onClick={() => {
          }}
        >{save}</Button>
      </FlexWrapper>
      <>
        <CheckBoxWrapper noPadding justifyContent="space-between">
          <SectionTitle title="Select Priviliges" />
          <div id="check">
            <Form.Check style={{ paddingRight: '10px' }} onClick={handleSelectAll} checked={isSelectAll}></Form.Check>
            {isSelectAll ? 'Un Select All' : 'Select All'}
          </div>
        </CheckBoxWrapper>
        <TableDisplayWrapper>
          <TableWrapper>
            <Table size="sm" responsive="sm">
              <TableHeader>
                {tableHeader.map((header, index) => (
                  <td key={index}>{header}</td>
                ))}
              </TableHeader>
              <tbody >
                {list.slice(0, 18).map((data, index) => (
                  <TableRow key={index}>
                    <td>{data.name}</td>
                    <td>
                      <Form.Check
                        key={data?.id}
                        name={data?.name}
                        id={data?.id}
                        onClick={handleClick}
                        checked={isSingleSelect.includes(data?.name)}
                      />
                    </td>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
          <TableWrapper>
            <Table size="sm" responsive="sm">
              <TableHeader>
                {tableHeader.map((header, index) => (
                  <td key={index}>{header}</td>
                ))}
              </TableHeader>
              <tbody >
                {dataList1.slice(18, 36).map((data, index) => (
                  <TableRow key={index}>
                    <td>{data.name}</td>
                    <td>
                      <Form.Check
                        key={data?.id}
                        name={data?.name}
                        id={data?.id}
                        onClick={handleClick}
                        checked={isSingleSelect.includes(data?.name)}
                      />
                    </td>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </TableDisplayWrapper>
      </>
      <CheckBoxWrapper noPadding justifyContent="start">
        <Button
          onClick={() => {
            console.log(isSingleSelect);
            dispatch(saveRole({
              name: isSingleSelect
            }))
          }}
        >Update</Button>
      </CheckBoxWrapper>
    </PageWrapper >
  )
}

export default AddRole
