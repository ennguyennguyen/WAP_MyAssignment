This lab is a terrible experience for me as it's too difficult. I got stuck with everything from the beginning to the end. Considering html, css, js are at the medium level, this servlet is at extremely difficult level.

At first i got an issue with setting up Tomcat server with IntelliJ. it took me quite a long time to make it run.
The second issue is building the war package.

This lab took me around 2 days to work on and 2~3 hours for readings and watch the videos to undertand.

-----------------
7 questions from the Deployment Lab

1. What is the purpose of the directory structure given on p. 30? 
--> Web applications use a standard directory structure defined in the J2EE specification. The purpose is using for compiling the servlet.

2. What is the purpose of the directory structure given on p. 31? 
--> It’s using for server deployment.

3. Why do you need to be in the project1 directory for step 5? 
--> It’s needed to be root in project1 to match arguments “-d classes src/Ch1Servlet.java”

4. Why is the copying of step 6 necessary? 
--> Following the tomcat standard directory structure: web.xml and Java class files must be in WEB-INF folder.

5. Where is the name of the web app defined? Try changing it.
--> Name of web app is sub-folder of webapps. We need to change URL to access servlet if we change it.

6. Why is step 9 necessary? Try changing display text in the servlet. What steps are necessary for your changes to appear in the browser? 
--> When we change servlet we need to re-compile and re-build the artifacts to copy to classes & resources file to deployment folder then restart tomcat server to reload deployment descriptor and Java class file.
