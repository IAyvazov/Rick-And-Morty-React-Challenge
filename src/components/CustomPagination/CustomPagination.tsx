import { Col, Pagination } from 'react-bootstrap';

const CustomPagination = ({ onCklickNext, onClickPrev }: any) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Col xs={6} md={4} lg={5} xl={2} xxl={1} >
                <Pagination >
                    <Pagination.Item onClick={onClickPrev} className='ml-5 mr-5 mb-5 mt-5'>
                        Previous
                    </Pagination.Item>
                    <Pagination.Item onClick={onCklickNext} className='ml-5 mr-5 mb-5 mt-5'>
                        Next
                    </Pagination.Item>
                </Pagination>
            </Col>
        </div>
    );

}

export default CustomPagination;