//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here
import './SnackHeader.jsx';
import SnackHeader from './SnackHeader.jsx';

import './SnackList.jsx';
import SnackList from './SnackList.jsx';

import './SnackFooter.jsx';
import SnackFooter from './SnackFooter.jsx';

export default function StudentWork() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}
