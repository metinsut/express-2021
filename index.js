import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import database from './src/config/database.js';
import optionsCors from './src/config/cors.js';
import routes from './src/routes/index.js';
import cookieParser from "cookie-parser"

dotenv.config();
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 4000;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.PRODUCTION_URL;

const app = express();
database();

if (!dev) {
    /* Helmet helps secure our app by setting various HTTP headers */
    app.use(helmet());
    /* Compression gives us gzip compression */
    app.use(compression());
}

if (dev) {
    // Logger middleware
    app.use(morgan('tiny'));
}

// cors helps for our app headers normalize
app.use(cors(optionsCors));

// express middleware for json body parser
app.use(express.json());

app.use(cookieParser())

app.use(express.static('static'));

app.use('/api', routes);

app.use((err, req, res, next) => {
    const { status = 500, message } = err;
    res.status(status).json({
        error: {
            message,
        }
    });
});

app.listen(port, () => console.log('App is listening on port ' + ROOT_URL));