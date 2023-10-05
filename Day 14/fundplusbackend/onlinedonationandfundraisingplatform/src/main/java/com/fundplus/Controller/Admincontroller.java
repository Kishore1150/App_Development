package com.fundplus.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fundplus.Constant.Api;

@RestController
@RequestMapping(Api.ADMIN)
public class Admincontroller {
  @GetMapping("/adminhome")
  public String welcome(){
    return "Welcome Admin";
  }
}
