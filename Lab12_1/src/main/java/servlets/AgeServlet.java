package servlets;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/AgeServlet")
public class AgeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession session = request.getSession();
        String error = "Please input age in range [4,100]";
        if(request.getParameter("age") == null || request.getParameter("age").trim().equals("")){
            session.setAttribute("error",error);
            RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
            rd.forward(request,response);
        }else{
            int age = tryParse(request.getParameter("age"),0);
            if(age >=4 && age <=100){
                session.removeAttribute("error");
                RequestDispatcher rd = request.getRequestDispatcher("QuizServlet");
                rd.forward(request,response);
            }else{
                session.setAttribute("error",error);
                RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
                rd.forward(request,response);
            }

        }
    }
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
    public int tryParse(String value, int defaultVal) {
        try {
            return Integer.parseInt(value);
        } catch (NumberFormatException e) {
            return defaultVal;
        }
    }
    public static String outputError(String value) {
        if(value == null || value == "")
            return "";
        else{
            return "<p class='red'>" + value + "</p>";
        }
    }
}
