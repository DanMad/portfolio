import 'styles/main';

function Main({ children }) {
  return (
    <main className="main" id="main">
      {children}
    </main>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Main.displayName = 'Main';
}

export default Main;
