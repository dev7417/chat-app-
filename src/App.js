import logo from './logo.svg';
import Navbar from './Components/Navbar';

const style = {
  appContainer:`max-w-[728px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] bg-grey-100 mt-10 shadow-xl border relative`
}

function App() {
  return (
    <>
        <div className={style.appContainer}>
          <section className={style.sectionContainer}>
            <Navbar/>
          </section>
        </div>
    </>
  );
}

export default App;
