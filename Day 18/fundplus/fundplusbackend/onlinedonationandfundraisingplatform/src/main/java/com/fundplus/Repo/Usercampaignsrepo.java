package com.fundplus.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fundplus.Model.Usercampaigns;

public interface Usercampaignsrepo extends JpaRepository<Usercampaigns,String>  {


  Usercampaigns findCampaignById(String id);



}
