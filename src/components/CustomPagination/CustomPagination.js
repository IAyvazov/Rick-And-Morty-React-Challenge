import { Col, Pagination } from 'react-bootstrap';

const CustomPagination = ({ onCklickNext, onClickPrev }) => {
    return (
        <Col xs={6} md={4} xl={2} lg={5} >
            <Pagination fluid='md'>
                <Pagination.Item onClick={onClickPrev} className='ml-5 mr-5'>
                    Previous
                </Pagination.Item>
                <Pagination.Item onClick={onCklickNext} className='ml-5 mr-5'>
                    Next
                </Pagination.Item>
            </Pagination>
        </Col>
    );

}

export default CustomPagination;