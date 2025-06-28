import { useState } from 'react';
import './findtrain.css'
import { SearchByLocation, SearchByName, SearchByNumber } from '../components/SearchForTrain';
function FindTrain() {

  const [searchMode, setSearchMode] = useState('')

  function getCurrentMode(Mode) {
    setSearchMode(Mode === searchMode ? null : Mode)
  }

  // windows.location.reload();

  const token = localStorage.getItem('token');
  console.log(token);
  return (
    <div className="find-train-page">
      <h2>Search For Train</h2>
      <div>
        <div className="OptionBlock">

          <button className="Button" onClick={() => getCurrentMode('Name')}>
            Search By Name
          </button>
          {searchMode === 'Name' && <SearchByName />}

        </div>

        <div className="OptionBlock">

          <button className="Button" onClick={() => getCurrentMode('Location')}>
            Search By Location
          </button>
          {searchMode === 'Location' && <SearchByLocation />}

        </div>

        <div className="OptionBlock">

          <button className="Button" onClick={() => getCurrentMode('Number')}>
            Search By Number
          </button>
          {searchMode === 'Number' && <SearchByNumber />}

        </div>

      </div>


    </div>
  );
}

export default FindTrain;
