import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, PageWrapper, FlexWrapper } from 'components';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Receipt from '..';

export class ComponentToPrint extends React.PureComponent {
    render() {
        return (
            <Receipt />
        );
    }
}

const Print = () => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle:'Fee Receipt'
    });

    return (
        <PageWrapper>
            <ComponentToPrint ref={componentRef} />
            <FlexWrapper justifyContent='center'>
                <Button onClick={handlePrint}><FontAwesomeIcon style={{ marginRight: '5px' }} icon={['fas', 'print']} />Print</Button>
            </FlexWrapper>
        </PageWrapper>
    );
};
export default Print