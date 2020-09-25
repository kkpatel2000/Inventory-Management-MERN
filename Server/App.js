mongoose = require('mongoose'),
config = require('./keys');
const express = require('express')
const PORT = 8000
const app = express();

const Row = require('./models/row')

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,  { useNewUrlParser: true } ).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

console.log("hello user")
app.listen(PORT,()=>{
    console.log("server is running on",PORT)
                                                                                                                                                                                                                                                                                                                                                                                                                    
})


require('./models/user')
require('./models/employee')
require('./models/vendor')
require('./models/row')
require('./models/stock')
require('./models/bill')
app.use(express.json())


app.use(require('./routes/auth'))
app.use(require('./routes/employee'))
app.use(require('./routes/vendor'))
app.use(require('./routes/row'))
app.use(require('./routes/stock'))
app.use(require('./routes/bill'))
