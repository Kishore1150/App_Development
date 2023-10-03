package com.fundplus.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="admindetails")
@Data
public class Admin {


  @Id
  private String id;
  private String firstName;
  private String lastName;
  private String email;
  private String password;
  private String dob;
  private String gender;
  private String role;
  private String country;
  private String location;
  @Lob
  @Column(name = "profileimage", columnDefinition = "LONGBLOB")
  private byte[] profileImage;
  private String website;
  private int phoneNumber;
  private int pincode;



}
