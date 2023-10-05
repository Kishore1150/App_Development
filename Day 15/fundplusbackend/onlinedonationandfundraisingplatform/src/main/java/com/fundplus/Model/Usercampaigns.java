package com.fundplus.Model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name = "usercampaigns")
public class Usercampaigns {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String title;
    private String category;
    private String content;
    private String topics;
    private String campaignimage;
    private int goalamount;
    private String goalformat;
    private int amountoflevel;
    private String levelname;
    private String description;
    private int minimumgoal;
    private String buttonlabel;
    private String goalmet;
    private Date createdAt;

     @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }






}
