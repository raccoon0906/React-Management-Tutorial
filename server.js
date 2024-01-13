const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5100;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

app.get('/api/customers', (req, res) => {
  res.send([
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`))

