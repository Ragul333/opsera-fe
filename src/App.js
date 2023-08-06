import './App.css';
import NavBar from './components/NavBar';
import headerIcon from './assets/header-icon.png'
import homeIcon from './assets/home-icon.png'
import restIcons from './assets/rest-icons.png'
import questionIcon from './assets/question.png'
import sortIcon from './assets/sort.png'
import settingsIcon from './assets/settings.png'
import IssueCard from './components/IssueCard';
import ContributorCard from './components/ContributorCard';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main className='content'>
        <div className='sidebar-icons'>
          <img src={homeIcon} />
          <img src={restIcons} />
        </div>
        <div className='report-heading'>
          <h1><img src={headerIcon} /> Engineer Report</h1>
          <div className='report-icons'>
            <img src={questionIcon} />
            <img src={sortIcon} />
            <img src={settingsIcon} />
          </div>
        </div>
        <div className='issue-status'>
          <IssueCard />
        </div>
        <div className='contributors'>
          <ContributorCard />
        </div>
      </main>
    </div>
  );
}

export default App;
