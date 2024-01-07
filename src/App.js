import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Customer from './components/Customer';
import { render } from '@testing-library/react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

const customers = [
  {
  'id' : 1,
  'image': 'https://tse1.mm.bing.net/th?id=OIP.YQD7SQcCtCGg2c39FjzBmAHaGU&pid=Api&P=0&h=220',
  'name' : '동동준나예유',
  'birthday' : '20060906',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image': 'https://tse1.mm.bing.net/th?id=OIP.YQD7SQcCtCGg2c39FjzBmAHaGU&pid=Api&P=0&h=220',
  'name' : '코로나',
  'birthday' : '19990101',
  'gender' : '트렌스젠더',
  'job' : '백수'
}
,{
  'id' : 3,
  'image': 'https://tse1.mm.bing.net/th?id=OIP.YQD7SQcCtCGg2c39FjzBmAHaGU&pid=Api&P=0&h=220',
  'name' : '고무',
  'birthday' : '20000101',
  'gender' : '놈자',
  'job' : '여포'
}
]

function App() { 
  
return (
  <div>
    {customers.map(c => {
      return (
        <Customer
          key={c.id}
          id ={c.id}
          image ={c.image}
          name ={c.name}
          birthday ={c.birthday}
          gender ={c.gender}
          job ={c.job}
        />
      )
    })}
  </div>
);
  
}

export default App;
