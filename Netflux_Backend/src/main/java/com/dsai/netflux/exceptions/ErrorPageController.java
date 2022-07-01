package com.dsai.netflux.exceptions;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;

@Controller
public class ErrorPageController implements ErrorController {

    @GetMapping(path = "/error")
    public String handleError(HttpServletRequest request, Model model) {

        String msg = "Looks like you are lost because John Travolta could not find:  ";
        model.addAttribute("msg",
                msg + request.getAttribute(RequestDispatcher.ERROR_REQUEST_URI));
        return "error";
    }

}
