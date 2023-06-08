const express=require('express');
const app=express();

const mongoose=require('mongoose');
const helmet=require('helmet');
const morgan=require('morgan');
const dotenv=require('dotenv');
const UserRoute=require('./routes/user');
const AuthRoute=require('./routes/auth');
const PostRoute=require('./routes/post');


dotenv.config();

mongoose.connect(process.env.MONGO_URL);

//middleware
app.use(express.json());
app.use(helmet());// for request server securely
app.use(morgan('common')); // login middleware

app.use('/api/users',UserRoute);
app.use('/api/auth',AuthRoute);
app.use('/api/posts',PostRoute);


app.listen(8800, console.log("Backend server is running"));
