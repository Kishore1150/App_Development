package com.fundplus.OtpService;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class OtpService {

  @Autowired
  private JavaMailSender javaMailSender;

  public String sendOtpEmailForSignUp(String recipientEmail, String name, String otp)
      throws MessagingException, IOException {
    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setTo(recipientEmail);
    helper.setSubject("OTP Verification");

    // Load the email template
    Resource resource = new ClassPathResource("templates/otptemplateemail.html");
    String content = new String(FileCopyUtils.copyToByteArray(resource.getInputStream()), StandardCharsets.UTF_8);

    // Replace placeholders in the email template
    content = content.replace("[Name]", name);
    content = content.replace("[OTP]", otp);

    helper.setText(content, true);

    // Send the email
    javaMailSender.send(message);

    return otp;
  }

  public String sendOtpEmailForVerify(String recipientEmail, String otp)
      throws MessagingException, IOException {
    MimeMessage message = javaMailSender.createMimeMessage();
    MimeMessageHelper helper = new MimeMessageHelper(message, true);
    helper.setTo(recipientEmail);
    helper.setSubject("OTP Verification");

    // Load the email template
    Resource resource = new ClassPathResource("templates/otptemplateemail.html");
    String content = new String(FileCopyUtils.copyToByteArray(resource.getInputStream()), StandardCharsets.UTF_8);

    content = content.replace("[Name]", recipientEmail);
    content = content.replace("[OTP]", otp);

    helper.setText(content, true);

    // Send the email
    javaMailSender.send(message);

    return otp;
  }
}
