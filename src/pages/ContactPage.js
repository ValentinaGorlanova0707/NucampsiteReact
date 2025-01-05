import ContactForm from '../components/ContactForm';
import SubHeader from '../components/SubHeader';
import { Container, Col } from 'reactstrap';

const ContactPage = () => {
    return (
        <Container>
            <SubHeader current='Send Us Your Feedback'  detail={false} />
            <Col md='10'>
                    <ContactForm />
            </Col>
    </Container>
    );
};

export default ContactPage;