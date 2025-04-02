import './App.css';
import Main from './components/Main';
import { SideNav } from './components/SideNav';
import { Contact } from './pages/Contact';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';

function App() {
  return (
    <>
      <SideNav></SideNav>
      <Main></Main>
      <Experience></Experience>
      {/* <Projects></Projects>
      <Resume></Resume> */}
      <Contact></Contact>
    </>
  );
}

export default App;
