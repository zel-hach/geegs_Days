import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import { items } from './models/menuModel.js';
import  routerMenu  from './routes/menuRoutes.js';

const app = express();
app.use(express.json());
items.createTables()

app.use('/api',routerMenu)
const PORT = process.env.PORT || 3000   
app.listen(PORT,()=>{
    console.log(`server connected in port ${PORT}`);
})