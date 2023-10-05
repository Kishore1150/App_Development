package com.fundplus.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fundplus.Model.Usercampaigns;
import com.fundplus.Repo.Usercampaignsrepo;
import com.fundplus.Service.Usercampaignservice;

@Service
public class Usercampaignserviceimpl implements Usercampaignservice {

  @Autowired
  private Usercampaignsrepo usercampaignsrepo;

  @Override
  public boolean saveUsercampaigns(Usercampaigns campaigns) {


      usercampaignsrepo.save(campaigns);
      return true;


  }

  public List<Usercampaigns> getAllCampaignsList() {
    return usercampaignsrepo.findAll();
  }

   public Usercampaigns findCampaignById(String id)
  {
    return usercampaignsrepo.findCampaignById(id);
  }


  public void deleteCampaign(Usercampaigns storedCampaign) {

    usercampaignsrepo.delete(storedCampaign);
  }

 

  public void updateCampaign(Usercampaigns storedCampaign) {


    usercampaignsrepo.save(storedCampaign);

  }



}
