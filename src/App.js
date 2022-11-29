
import Navbar from './Components/Navbar';
import { auth } from './Firebase/Firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './Components/Chat';


const style = {
  appContainer:`max-w-[728px] mx-auto text-center`,
  sectionContainer:`flex flex-col h-[90vh] bg-grey-100 mt-10 shadow-xl border relative`
}

function App() {
 
  // const[user, setuser] = useState()
  const [user] = useAuthState(auth)


  // onAuthStateChanged(auth, (user)=>{
  //   if(user){
  //     setuser(user)
  //     console.log(user)
  //   }else{
  //     console.log('error')
  //   }
  // })

  return (
    <>
        <div className={style.appContainer}>
          <section className={style.sectionContainer}>
            <Navbar/>
            {user ? <Chat/>: null}
          </section>
        </div>
    </>
  );
}

export default App;
