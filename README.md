# S3-Docker-Setup
## Setup 
* Copy the files to your project.
*  Then install the neccessary packages to run the.

        npm install s3rver
   
*  Build docker image.

        docker compose build
   
*  Run the machine using dokcer compose up.

        docker compose up
   
*  Now you have your s3 bucket setup in you local machine to build bigger projects.

### Issue
If you face any error like No s3rver module found make sure you installed it in your project and If you still face the error then add ( "type":"module", ) in your package.json file.


##### *NOTE: All this setup is not mine I copied this from a Youtuber [WebDevCody](https://github.com/webdevcody). So please give him love for this.*
