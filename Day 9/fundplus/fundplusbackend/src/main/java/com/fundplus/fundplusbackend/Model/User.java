package com.fundplus.fundplusbackend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

  @Id
  private String id;
  private String password;
  private String firstName;
  private String lastName;
  private String email;


  @Lob
  @Column(name = "image", columnDefinition = "LONGBLOB")
  private byte[] userImage;

}
