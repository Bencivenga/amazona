import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/esm/Form';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

function SigninScreen() {
  const { search } = useLocation();
  console.log(search);
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  console.log(redirectInUrl);
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <h1 className="my-3">Sign in</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb3">
          <Button type="submit">Sign in</Button>
        </div>
        <div className="mb3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}

export default SigninScreen;
