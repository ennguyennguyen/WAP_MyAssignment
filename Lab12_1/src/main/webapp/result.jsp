<%--
  Created by IntelliJ IDEA.
  User: Joe Nguyen
  Date: 9/20/2020
  Time: 4:05 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>JSP Quiz</title>
</head>
<body>
<h1>The Number Quiz</h1>
${quiz.correctAnswerOfPrevQuestion}
<p>Your current score is ${quiz.score} and you have grade <span class="red">${quiz.grade}</span></p>
</body>
</html>
