package com.fundplus.Model;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Emailsender {

  private String to;
  private String subject;
  private String body;
  private MultipartFile attachment;



}
