import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;

public class MyTag4 extends SimpleTagSupport {
    String foreColor;
    String text;

    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();
        if (foreColor != null)
            out.write(String.format("<span style='color:%s'>%s</span>", foreColor, text));
        else
            out.write(String.format("<span>%s</span>", text));
    }

    // Setters
    public void setForeColor(String foreColor) {
        this.foreColor = foreColor;
    }

    public void setText(String text) {
        this.text = text;
    }
}
