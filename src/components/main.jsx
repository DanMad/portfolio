import 'styles/main';

function Main({ children }) {
  return (
    <main className="main" id="main">
      {children}
    </main>
  );
}

Main.displayName = 'Main';

export default Main;
