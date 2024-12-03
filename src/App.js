import React, { useEffect, useState } from 'react';
import Dashboard from './pages/dashboard/page';
import GroupingContext from './context/GroupingContext';
import OrderingContext from './context/OrderingContext';
import groupByUserAndSortByPriority from './service/makingData';

const App = () => {

  const [grouping, setGrouping] = useState('user');
  const [ordering, setOrdering] = useState('priority');

  const run = async () => {
    const result = await groupByUserAndSortByPriority();
    console.log(result);
  };
  
  run();


  return (
    <GroupingContext.Provider value={{grouping, setGrouping}}>
    <OrderingContext.Provider value={{ordering, setOrdering}}>
    <div className="App">
     <div><Dashboard/></div>
    </div>
    </OrderingContext.Provider>
    </GroupingContext.Provider>
  );
}

export default App;
