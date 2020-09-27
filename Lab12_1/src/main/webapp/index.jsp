<%@ page import="static servlets.AgeServlet.outputError" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Quiz Servlet</title>
    <link href="css/style.css" type="text/css" rel="stylesheet">
</head>

<body>
<%
    String errorMsg = (String) session.getAttribute("error");
%>

<%=outputError(errorMsg)%>
<form action='AgeServlet' method='POST'>
    <h1>JSP Number Quiz</h1>
    <p> Input your age: <input type='text' name='age' /></p>
    <p><input type='submit' value='Submit' /></p>
</form>
</body>

</html>
