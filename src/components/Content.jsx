const Content = ({ account, smartContract, errorMessage, data }) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='text-center'>
        <h1 className='text-2xl text-themeOrange'>
          {' '}
          Contract Name: {data.name}
        </h1>
      </div>
    </div>
  );
};

export default Content;
