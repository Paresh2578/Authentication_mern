const   express = require( 'express');
const  cors  = require( 'cors');
const  connectDB = require( "./db/DbConnections.js");



const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // specify the frontend's origin
  credentials: true,  // allow credentials to be sent
}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

//connect to database
connectDB();

const PORT = 5447;

//Routes
const userRouter = require('./routes/UserRouter.js');


app.use('/api/user', userRouter);


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});