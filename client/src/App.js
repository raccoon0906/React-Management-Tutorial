import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

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

class App extends Component {
  render() { 
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
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
          </TableBody>
          </Table>
    </Paper>
  );
}  
}

export default withStyles(styles)(App);