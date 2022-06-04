/* eslint-disable no-unused-vars */
import { ReactElement, useState, useEffect, SyntheticEvent } from 'react'
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
import { dataList1 } from './const'

const AddRole = (): ReactElement => {

  const {
    role: { addRole, addRolePlaceholder, addRoleLabel },
    button: { save }
  } = strings

  const [isSelectAll, setIsSelectAll] = useState(false)
  const [isSingleSelect, setIsSingleSelect] = useState<Array<any>>([]);
  const [list] = useState(dataList1);

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

  console.log(isSingleSelect);

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
            <Form.Check onClick={handleSelectAll} checked={isSelectAll}></Form.Check>
            {isSelectAll ? 'Un Select All' : 'Select All'}
          </div>
        </CheckBoxWrapper>
        <TableDisplayWrapper>
          <TableWrapper>
            <Table size="sm" responsive="sm">
              <TableHeader>
                <td>Menu</td>
                <td>Privileges</td>
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
                <td>Menu</td>
                <td>Privileges</td>
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
        <Button>Update</Button>
      </CheckBoxWrapper>
    </PageWrapper >
  )
}

export default AddRole
