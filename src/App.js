import logo from './logo.svg';
import './AppTailwind.css';
import ConfirmTabClosure from './components/tabCloseConfirmation';
import Logo from './components/logo';
import CloudCacheApps from './components/cloudCacheApps';
import SearchBar from './components/searchBar';
import Account from './components/account';
import SideBar from './components/sideBar';
import ContentNavBar from './components/contentNavBar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <ConfirmTabClosure />
      </div>
      <div className="header border-b border-amber-300 pt-3 pb-2 px-2 sm:px-4 md:px-5 lg:px-6 flex">
        <Logo />
        <CloudCacheApps />
        <SearchBar />
        <Account />
      </div>
      <div className="body pb-2 px-1 sm:px-3 md:px-4 lg:px-5 flex">
        <SideBar />
        <ContentNavBar />
      </div>
      
    </div>
  );
}

export default App;
