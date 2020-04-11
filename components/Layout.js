import Header from './Header';

export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
