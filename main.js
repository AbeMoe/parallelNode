const {parallel,sequential} = require(__dirname+'/jobs.js');
parallel(5,1);
sequential(5,1);


