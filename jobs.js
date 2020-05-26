const { spawn } = require('child_process');


/**
 * @author Abe 
 * @name parallel
 * @param {number} numJobs The number of jobs to be executed 
 * @param {number} waitTime The length in seconds to execute of each job
 * @returns Nothing
 * @description creates numJob number of jobs and executes them on separate threads
 */
exports.parallel = function(numJobs,waitTime)
{
  for(let i=0;i<numJobs;i++)
  {
    let job = spawn('py', ['arbitraryWork.py', waitTime]);
    job.jobNumber = i;
    job.on('close',()=>{console.log(`Job number ${job.jobNumber} finished`)});
  }
}

/**
 * @author Abe 
 * @name sequential
 * @param {number} numJobs The number of jobs to be executed 
 * @param {number} waitTime The length in seconds to execute of each job
 * @returns Nothing
 * @description creates numJob number of jobs and executes them in sequence using recursion
 */
exports.sequential = function doJob(numJobs,waitTime)
{
  setTimeout
  (
    function()
    {
      console.log(`jobs left ${numJobs}`);
      
      return numJobs!=0 ? doJob(numJobs-1,waitTime) : undefined
    }, 
    waitTime * 1000
  );
}

