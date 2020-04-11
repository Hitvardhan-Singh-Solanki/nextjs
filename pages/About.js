import Layout from '../components/Layout';
import Badge from 'react-bootstrap/Badge';

export default (props) => (
  <div>
    <Layout>
      <p>This is the about page</p>
      <p className="display-4">Hello</p>
      <Badge>Heading</Badge>
    </Layout>
  </div>
);
