An Introduction to Web Scraping with Node JS
https://codeburst.io/an-introduction-to-web-scraping-with-node-js-1045b55c63f7
https://medium.com/data-scraper-tips-tricks/scraping-data-with-javascript-in-3-minutes-8a7cf8275b31
https://scotch.io/tutorials/scraping-the-web-with-node-js

Website:
Synchronous https://www.expatistan.com/cost-of-living/auckland 
Asynchronous https://www.numbeo.com/cost-of-living/in/Auckland 


jsonframe allows you to input a json file, scrape the structured data listed in the json and output an already well structured json object / file. Ready to save to your database.

		#region OrganizationID
		public abstract class organizationID : PX.Data.IBqlField
		{
		}

		[Organization(IsKey = true, BqlField = typeof(TaxPeriodEffective.organizationID))]
		public virtual Int32? OrganizationID { get; set; }
		#endregion

The official MongoDB driver for Node.js. Node mongodb native 
    https://github.com/mongodb/node-mongodb-native
    ObjectId is 12-byte value consists of
        a 4-byte value representing the seconds since the Unix epoch,
        a 3-byte machine identifier,
        a 2-byte process id, and
        a 3-byte counter, starting with a random value.
        ObjectId.getTimestamp()	Returns the timestamp portion of the object as a Date.

Mongoose ORM (Object relational mapping)
    Allow to define data structure
    Validation

Database Naming Convention
    http://arkusnexus.com/2016/09/12/coding-guidelines-mongodb/?nabe=5802299602763776:1&utm_referrer=https%3A%2F%2Fwww.google.co.nz%2F
    Collection name should be singular, it is convenient for naming mongoose model 

Add to github
    git init
    add .gitignore
    create new repository in github https://github.com/vdkhiem/costofliving
    git add .
    git commit -m "Init Commit"
    git remote add origin https://github.com/vdkhiem/costofliving.git
    git push -u origin master

    Add/Update to github
    git status
    git add .
    git commit -m "my comment"
    git push origin master

Deploy to heroku
    Go to root folder and run cmd
    heroku create
    heroku addons:create mongolab:sandbox
    heroku config // this return mongodb connection "mongodb://heroku_jhdnzbx9:nksvav4a8uup0qte70ibjpgpfj@ds233218.mlab.com:33218/heroku_jhdnzbx9"
    git push heroku master //push app (master branch) to heroku 