package com.fundplus.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fundplus.Constant.Api;
import com.fundplus.Model.User;
import com.fundplus.Repo.Userrepo;
import com.fundplus.ServiceImpl.Userserviceimpl;

import jakarta.mail.internet.MimeMessage;

@RestController
@RequestMapping(Api.ADMIN)
public class Emailsendercontroller {

  @Autowired
  private JavaMailSender emailSender;

  @Autowired
  private Userserviceimpl userrepo;

  @PostMapping("/sendemailtouser")
  public ResponseEntity<String> sendEmailWithAttachment(@RequestParam("to") String to,
      @RequestParam("subject") String subject,
      @RequestParam("body") String body,
      @RequestParam("attachment") MultipartFile attachment) {
    try {
      MimeMessage message = emailSender.createMimeMessage();
      MimeMessageHelper helper = new MimeMessageHelper(message, true);

      helper.setTo(to);
      helper.setSubject(subject);
      helper.setText(body);

      helper.addAttachment(attachment.getOriginalFilename(), attachment);

      emailSender.send(message);

      System.out.println("Email sent successfully");
      return ResponseEntity.ok("Email sent successfully.");
    } catch (Exception e) {
      System.out.println("Failed to send email: " + e.getMessage());
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email.");
    }
  }

  @PostMapping("/sendemailtomultipleusers")
  public ResponseEntity<String> sendEmailToMultipleUsers(@RequestParam("subject") String subject,
      @RequestParam("body") String body,
      @RequestParam("attachment") MultipartFile attachment) {
    try {
      List<User> users = userrepo.getAllUsers();
      for (User user : users) {
        String to = user.getEmail();

        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(body);

        helper.addAttachment(attachment.getOriginalFilename(), attachment);

        emailSender.send(message);
      }

      System.out.println("Emails sent successfully");
      return ResponseEntity.ok("Emails sent successfully.");
    } catch (Exception e) {
      System.out.println("Failed to send emails: " + e.getMessage());
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send emails.");
    }
  }




}
