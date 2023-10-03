package com.fundplus.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="usercarddetails")
@Data
@NoArgsConstructor
public class Usercarddetails {


  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private long cardNumber;
  private String cardName;
  private String cardYear;
  private String cardMonth;









}
