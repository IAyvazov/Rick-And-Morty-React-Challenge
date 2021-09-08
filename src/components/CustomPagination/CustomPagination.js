import { Pagination ,Col } from 'react-bootstrap';

const CustomPagination = () => {

    return (
        <Col xs={6} md={4} xl={2}>
            <Pagination>
                <Pagination.Item  className='ml-5 mr-5'>
                    {'<<'}
                </Pagination.Item>
                <Pagination.Item  className='ml-5 mr-5'>
                    {'>>'}
                </Pagination.Item>
            </Pagination>
        </Col>
    )
}

export default CustomPagination