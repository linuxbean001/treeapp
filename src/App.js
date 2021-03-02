// import logo from './logo.svg';
 import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}



//     </div>
//   );
// }

// export default App;


import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  "name": "Root",
  "children": [
    {
      "name": "Left 1",
      "children": [
        {
          "name": "Left 1_1"
        },
        {
          "name": "Left 1_2"
        }
      ]
    },
    {
      "name": "Left 2",
      "children": [
        {
          "name": "Left 2_1"
        }
      ]
    },
    {
      "name": "Left 3"
    },
    {
      "name": "Left 4",
      "children": [
        {
          "name": "Left 4_1"
        },
        {
          "name": "Left 4_2"
        },
        {
          "name": "Left 4_3"
        }
      ]
    },
    {
      "name": "Left 5"
    }
  ]
};

export default function App() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '50em', height: '50em',top:'50px' }}>
      <Tree data={orgChart}   rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf" nodeSize={{x:'40',y: '40'}} />
    </div>
  );
}
