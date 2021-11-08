import { FC } from 'react';
import { Col, Pagination } from 'react-bootstrap';
import { ICustomPaginationProps } from '../../interfaces/interfaces';

const CustomPagination: FC<ICustomPaginationProps> = ({ onClickNext, onClickPrev }) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Col xs={6} md={4} lg={5} xl={2} xxl={1} >
                <Pagination >
                    <Pagination.Item onClick={onClickPrev} className='ml-5 mr-5 mb-5 mt-5'>
                        Previous
                    </Pagination.Item>
                    <Pagination.Item onClick={onClickNext} className='ml-5 mr-5 mb-5 mt-5'>
                        Next
                    </Pagination.Item>
                </Pagination>
            </Col>
        </div>
    );

}

export default CustomPagination;