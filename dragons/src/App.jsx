import { useDispatch, useSelector } from 'react-redux';
import { clearLogs } from './store/reducer/logReducer';
import { deleteDragonAction } from './store/action/dragon-action';
import Form from './component/Form';
import List from './component/List';
import './App.css'; // Import du fichier CSS

const App = () => {
  const dispatch = useDispatch();
  const logs = useSelector(state => state.logs);
  const dragons = useSelector(state => state.dragons);

  const handleClearLogs = () => {
    dispatch(clearLogs());
  };

  return (
    <div>
      <Form />
      <List dragons={dragons} deleteDragon={(id) => dispatch(deleteDragonAction(id))} />
      <div className="button-container">
        <button onClick={handleClearLogs}>Clear Logs</button>
      </div>
      <div className="logs">
        <h3>Logs:</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log.timestamp} - {log.action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
