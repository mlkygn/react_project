import logo from './logo.svg';
import styles from './App.module.css'
import Navbar from './navbar'
import LoadingButton from './Bootstrap'

function App() {
  return (
    <div className={styles.App}>
      <img src={logo} width={50} alt="" />
      <Navbar />
      <LoadingButton />
    </div>

  );
}

export default App;
