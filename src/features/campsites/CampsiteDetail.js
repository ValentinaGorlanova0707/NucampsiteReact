import { useSelector } from 'react-redux';
import { selectCampsiteById } from './campsitesSlice';
import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ({campsiteId}) => {
    const campsite = useSelector(selectCampsiteById(campsiteId));
    const { image, name, description } = campsite;
    console.log('campsite:', campsite);

    return(
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CampsiteDetail;