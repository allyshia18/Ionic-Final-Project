import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import mongoose from 'mongoose';
import taskRoutes from './routes/taskRoutes';

const connectionString: string = 'mongodb://localhost:27017/testDB';

mongoose.connect(connectionString).then(
    () => console.log('database connection successful!'), 
    err => console.log('Error connecting to the database', err));

const app = express();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// middleware here
const cors = require('cors');
const corsOptions = {
    origin: [ 'http://localhost:4200', 'http://localhost:3001' ]
};
app.use(cors(corsOptions));


app.use('/api/tasks', taskRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).send("This is not the URL you are looking for!");
})



app.listen(3000);