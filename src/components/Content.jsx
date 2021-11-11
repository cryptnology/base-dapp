import * as s from '../styles/globalStyles';

const Content = ({ account, smartContract, errorMessage, data }) => {
  return (
    <s.Container flex={1} ai={'center'} jc={'center'}>
      {account === '' || smartContract === null ? (
        <>
          <s.TextTitle>Connect to the Blockchain</s.TextTitle>
          <s.SpacerMedium />
          {errorMessage !== '' ? (
            <s.TextSubTitle style={{ color: 'red' }}>
              {errorMessage}
            </s.TextSubTitle>
          ) : null}
        </>
      ) : (
        <>
          <s.TextTitle>{data.name}</s.TextTitle>
          <s.SpacerMedium />
          <s.TextSubTitle>{smartContract._address}</s.TextSubTitle>
        </>
      )}
    </s.Container>
  );
};

export default Content;
