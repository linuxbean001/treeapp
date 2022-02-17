import './App.css';
import React from 'react';
import Tree from 'react-d3-tree';

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
    <div id="treeWrapper" style={{ width: '50em', height: '50em',top:'50px' }}>
      <Tree data={orgChart}   rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf" nodeSize={{x:'40',y: '40'}} />
    </div>
  );
}
