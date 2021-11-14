import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import logo from '../images/cryptnology.jpeg';

const Header = ({
  account,
  smartContract,
  dispatch,
  connect,
  network,
  balance,
}) => {
  const blockchainExplorerURL = account => {
    if (network === 'Rinkeby') {
      return `https://rinkeby.etherscan.io/address/${account}`;
    } else if (network === 'Kovan') {
      return `https://kovan.etherscan.io/address/${account}`;
    } else return `https://mumbai.polygonscan.com/address/${account}`;
  };

  return (
    <Navbar collapseOnSelect expand='lg' fixed='top'>
      <Container fluid={'xl'}>
        <img
          alt='logo'
          src={logo}
          width='25'
          height='25'
          className='d-inline-block align-top me-3'
        />
        <Navbar.Brand
          href='http://www.cryptnology.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          cryptnology.dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          {account && smartContract ? (
            <>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
                <Nav.Link href='#link'>Link</Nav.Link>
              </Nav>

              <Nav className='ms-auto'>
                <Navbar.Text className='me-4'>{network}</Navbar.Text>
                <Navbar.Text className='me-4'>
                  {balance} {network === 'Rinkeby' ? 'ETH' : 'MATIC'}
                </Navbar.Text>
              </Nav>

              <div className='text-center'>
                <a
                  href={blockchainExplorerURL(account)}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-sm btn-primary me-4'
                >
                  {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
                <Button
                  variant='dark'
                  onClick={() => {
                    window.location.reload();
                  }}
                  className=' btn-sm '
                >
                  Disconnect
                </Button>
              </div>
            </>
          ) : (
            <Nav className='ms-auto'>
              <div className='text-center'>
                <Button
                  variant='primary'
                  onClick={e => {
                    e.preventDefault();
                    dispatch(connect());
                  }}
                  className=' btn-sm me-auto'
                >
                  Connect Wallet
                </Button>
              </div>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
