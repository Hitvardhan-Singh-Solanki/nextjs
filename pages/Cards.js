// import { Card } from 'react-bootstrap';
import Card from './../components/Card';
import Layout from '../components/Layout';

export default () => {
  const cardTypes = [
    // 'Primary',
    // 'Secondary',
    // 'Success',
    // 'Danger',
    // 'Warning',
    // 'Info',
    // 'Light',
    'Dark',
  ];

  return (
    <Layout>
      <Card />
      {/* {cardTypes.map((variant, idx) => {
        return (
          <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })} */}
    </Layout>
  );
};
