import './App.css';
// 記得載入 bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// 主要的 component
import MyTable from './MyTable';

/* 範例資料 */
function usersGererator(size) {
	let items = [];
	for (let i = 0; i < size; i++) {
		items.push({ id: i + 1, name: `Name ${i + 1}`, age: 18 + i });
	}
	return items;
}

const data = usersGererator(100);


function App() {
  return (
    <div className="App">
        <h1>React Bootstrap Table 範例</h1>
        <MyTable tableData={data} sizePerPage={10}></MyTable>
    </div>
  );
}

export default App;
