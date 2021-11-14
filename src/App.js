import { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from './redux/blockchain/blockchainActions';
import { fetchData } from './redux/data/dataActions';
// import { create } from 'ipfs-http-client';
import Header from './components/Header';
import Content from './components/Content';
import Page from './components/Page';
import * as s from './styles/globalStyles';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);
  const data = useSelector(state => state.data);

  useEffect(() => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  }, [blockchain.smartContract, blockchain.account, dispatch]);

  const renderConnectPage = () => {
    return (
      <s.Container flex={1} ai={'center'} jc={'center'}>
        <s.TextTitle>Connect to the Blockchain</s.TextTitle>
        <s.SpacerMedium />
        {blockchain.errorMsg !== '' ? (
          <s.TextSubTitle style={{ color: 'red' }}>
            {blockchain.errorMsg}
          </s.TextSubTitle>
        ) : null}
      </s.Container>
    );
  };

  return (
    <>
      <Header
        account={blockchain.account}
        smartContract={blockchain.smartContract}
        dispatch={dispatch}
        connect={connect}
        network={blockchain.network}
        balance={blockchain.balance}
      />
      <s.Screen>
        {blockchain.account === '' || blockchain.smartContract === null ? (
          renderConnectPage()
        ) : (
          <Switch>
            <Route path='/page' component={Page} />
            <Route path='/home'>
              <Content
                account={blockchain.account}
                smartContract={blockchain.smartContract}
                errorMessage={blockchain.errorMsg}
                data={data}
              />
            </Route>
            <Redirect from='/' exact to='/home' />
          </Switch>
        )}
      </s.Screen>
    </>
  );
}

export default App;
