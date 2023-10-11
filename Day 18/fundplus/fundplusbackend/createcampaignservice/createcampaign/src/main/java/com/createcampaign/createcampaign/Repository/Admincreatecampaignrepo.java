package com.createcampaign.createcampaign.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.createcampaign.createcampaign.Model.Admincreatecampaign;

public interface Admincreatecampaignrepo extends JpaRepository<Admincreatecampaign, String> {

  Admincreatecampaign findCampaignById(String id);

}
