package com.fundplus.fundplusbackend.Dto;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
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
