import express, { application } from 'express'
import connection from './config/dbConfig.js';
import taskRoutes from './routes/taskRoutes.js'
import cors from 'cors'
import { config } from "dotenv";
config()
connection();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json())
app.use(cors())
app.use('/api', taskRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});