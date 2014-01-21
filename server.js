var // Dependencies
    express  = require('express'),
    helmet   = require('helmet'),
    // Modules
    api      = require('./routes/api'),
    // Let's light this candle
    app      = express();

// Settings
var settings = {
    env  : app.get('env') || "production",
    port : process.env.PORT || 6633
};

// Middleware config
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());
// Helmet config
app.use(helmet.xframe());
app.use(helmet.iexss());
app.use(helmet.contentTypeOptions());
app.use(helmet.cacheControl());

// API Routes
app.get('/api/jshint',     api.jshint);
app.get('/api/preprocess', api.preprocess);

// Start the server
console.log("Listening on port " + settings.port);
app.listen(settings.port);