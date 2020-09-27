<%--
  Created by IntelliJ IDEA.
  User: Joe Nguyen
  Date: 9/20/2020
  Time: 4:04 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>JSP Quiz</title>
    <link href="css/style.css" type="text/css" rel="stylesheet">
</head>
<body>
<form action='QuizServlet' method='POST'>
    <h1>JSP Number Quiz</h1>
    <p class="red">${quiz.getCorrectAnswerOfPrevQuestion()}</p>
    <p> Your score is ${quiz.score}</p>
    <p> Guess the next number in the sequence.</p>
    <p>${quiz.nextQuestion}</p>
    <p> Your answer: <input type='text' name='answer' /></p>
    <p><input type='submit' value='Submit' /></p>
</form>
</body>
</html>
