import PropTypes from 'prop-types';

function Main({ children }) {
  return (
    <main className="main" id="main">
      {children}
    </main>
  );
}

Main.displayName = 'Main';

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
