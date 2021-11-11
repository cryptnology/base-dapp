import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from './redux/blockchain/blockchainActions';
import { fetchData } from './redux/data/dataActions';
// import { create } from 'ipfs-http-client';
import Header from './components/Header';
import Content from './components/Content';
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

  return (
    <>
      <s.Screen>
        <Header
          account={blockchain.account}
          smartContract={blockchain.smartContract}
          dispatch={dispatch}
          connect={connect}
          network={blockchain.network}
          balance={blockchain.balance}
        />
        <Content
          account={blockchain.account}
          smartContract={blockchain.smartContract}
          errorMessage={blockchain.errorMsg}
          data={data}
        />
      </s.Screen>
    </>
  );
}

export default App;
