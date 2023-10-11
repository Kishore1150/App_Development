package com.fundplus.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@AllArgsConstructor
public class Userdto {

  private String id;
  private String firstName;
  private String lastName;
  private String email;
  private byte[] userImage;
}
