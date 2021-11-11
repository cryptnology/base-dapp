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
    <Navbar collapseOnSelect expand='sm' fixed='top'>
      <Container fluid={'xl'}>
        <Navbar.Brand
          href='http://www.cryptnology.dev'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            alt='logo'
            src={logo}
            width='25'
            height='25'
            className='d-inline-block align-top me-2'
          />
          cryptnology.dev
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          className='justify-content-end'
          id='responsive-navbar-nav'
        >
          {account && smartContract ? (
            <>
              <Nav>
                <Navbar.Text className='me-4'>{network}</Navbar.Text>
                <Navbar.Text className='me-4'>
                  {balance} {network === 'Rinkeby' ? 'ETH' : 'MATIC'}
                </Navbar.Text>
              </Nav>

              <a
                href={blockchainExplorerURL(account)}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-sm btn-primary'
              >
                {account.slice(0, 5) + '...' + account.slice(38, 42)}
              </a>
            </>
          ) : (
            <Button
              variant='primary'
              onClick={e => {
                e.preventDefault();
                dispatch(connect());
              }}
              className=' btn-sm'
            >
              Connect Wallet
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
