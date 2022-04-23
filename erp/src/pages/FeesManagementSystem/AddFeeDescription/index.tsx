import { ReactElement, useEffect, useState } from 'react'
import {
  PageWrapper,
  SectionTitle,
  CardWrapper,
  CardHeader,
  DropdownWrapper,
  EditableDropdown,
  Input,
  Button,
  Loader
} from 'components'
import strings from 'locale/en'
import { AddFeeWrapper, FeeWrapper } from './subcomponents'
import SecondaryButton from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { RootState } from 'redux/store'
import {
  addNewFeeDescription,
  editFeeDescriptionRequest,
  getFeeDescriptions,
  updateEditDescriptionId,
  updateEditFeeMaster
} from 'redux/fms/actions'
import initialState from './const'
import AddFeeDescriptionValues from './typings'

const AddFeeDescription = (): ReactElement => {
  const { feeTypeList, isLoading, editDescriptionId, editFeeMaster } =
    useSelector(
      (state: RootState) => ({
        feeTypeList: state.acamedic.feeTypeList,
        isLoading: state.fms.isLoading,
        editDescriptionId: state.fms.editDescriptionId,
        feeDescriptionList: state.fms.feeDescriptionList,
        editFeeMaster: state.fms.editFeeMaster,
      }),
      shallowEqual
    )
  const {
    fms: {
      feeDescription: {
        addFeeDescription,
        editFeeDesciption,
        feeDetails,
        selectFeeType,
        feeType,
        feeDescription,
        enterFeeDescription
      }
    },
    button: { save, exit }
  } = strings
  const history = useHistory()
  const dispatch = useDispatch()


  const filteredFeeType = editFeeMaster
    ? feeTypeList.find((fee) => fee.name === editFeeMaster.title)
    : null
  const feeTypeDefaultValue = {
    id: filteredFeeType?.id || '',
    name: filteredFeeType?.name || ''
  }

  const [values, setValues] = useState<AddFeeDescriptionValues>({
    ...initialState,
    description: editFeeMaster?.description || initialState.description ,
    title: filteredFeeType?.name || initialState.title,
  })
  // eslint-disable-next-line no-unused-vars
  const canSave = 
  !!values.title && 
  !!values.description

  const isEdit = editDescriptionId > 0

  useEffect(() => {
    dispatch(getFeeDescriptions())
    return () => { 
      dispatch(updateEditDescriptionId(0))
      dispatch(updateEditFeeMaster(null))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PageWrapper id="container">
      <SectionTitle
        title={isEdit ? editFeeDesciption : addFeeDescription}
        hasBackButton
      />
      <FeeWrapper noPadding width="50%" justifyContent="center">
        <CardWrapper width="100%">
          <CardHeader>{feeDetails}</CardHeader>
        </CardWrapper>
        <AddFeeWrapper>
          <DropdownWrapper width="90%">
            <EditableDropdown
              dropdownList={feeTypeList}
              title={selectFeeType}
              placeholder={feeType}
              onBlur={() => { }}
              error={''}
              handleSelect={(item) => {
                setValues({
                  ...values,
                  title: item.name
                })
              }}
              defaultValue={feeTypeDefaultValue}
            />
          </DropdownWrapper>
          <DropdownWrapper width="90%">
            <Input
              label={enterFeeDescription}
              placeholder={feeDescription}
              value={values.description}
              onBlur={() => { }}
              error={''}
              onChange={(value: string) => {
                setValues({
                  ...values,
                  description: value
                })
              }}
              height="100px"
              inputType="textarea"
            />
          </DropdownWrapper>
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              <Button
                disabled={!canSave}
                onClick={() => {
                  const {
                    title,
                    description,
                  } = values
                   editFeeMaster
                   ? dispatch(
                      editFeeDescriptionRequest({
                        id: `${editFeeMaster?.id}`,
                        title,
                        description,
                      })
                    )
                    : dispatch (addNewFeeDescription({
                      title,
                      description 
                    }))
                }}
              >
                {save}
              </Button>
              <SecondaryButton
                variant="secondary"
                onClick={() => history.goBack()}
              >
                {exit}
              </SecondaryButton>
            </div>
          )}
        </AddFeeWrapper>
      </FeeWrapper>
    </PageWrapper>
  )
}

export default AddFeeDescription
