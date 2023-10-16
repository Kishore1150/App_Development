package com.fundplus.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fundplus.Model.Usercampaigns;

@Repository
public interface Usercampaignsrepo extends JpaRepository<Usercampaigns,String>  {


  Usercampaigns findCampaignById(String id);



}
