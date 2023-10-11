package com.fundplus.Model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Userdonations {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private String id;
  private String donorname;
  @CreatedDate
  @Temporal(TemporalType.TIMESTAMP)
  @Column(nullable = false, updatable = false)
  private Date createdAt;
  private double totaldonation;
  private String donationtitle;
  private String donationstatus;
  private String donationid;
  private String paymentmethod;
  

}
