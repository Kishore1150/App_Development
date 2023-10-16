package com.fundplus.Service;

import java.util.List;

import com.fundplus.Model.Usercampaigns;

public interface Usercampaignservice {


  public boolean saveUsercampaigns(Usercampaigns campaigns);
  public List<Usercampaigns> getAllCampaignsList();


}
