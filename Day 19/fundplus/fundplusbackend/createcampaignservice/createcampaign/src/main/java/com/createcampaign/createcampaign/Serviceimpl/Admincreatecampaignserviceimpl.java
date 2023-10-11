package com.createcampaign.createcampaign.Serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.createcampaign.createcampaign.Model.Admincreatecampaign;
import com.createcampaign.createcampaign.Repository.Admincreatecampaignrepo;


@Service
public class Admincreatecampaignserviceimpl {

   @Autowired
  private Admincreatecampaignrepo admincreatecampaignrepo;

  public ResponseEntity<Admincreatecampaign> saveAdmincampaigns(Admincreatecampaign campaigns) {

try {
			Admincreatecampaign savedCampaign = admincreatecampaignrepo.save(campaigns);
			return new ResponseEntity<>(savedCampaign, HttpStatus.CREATED);
		} catch (Exception e) {
			// Handle the exception (e.g., log it, perform a rollback, etc.)
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}


  }
  	



  public List<Admincreatecampaign> getAllCampaignsList() {
    return admincreatecampaignrepo.findAll();
  }

   public Admincreatecampaign findCampaignById(String id)
  {
    return admincreatecampaignrepo.findCampaignById(id);
  }


  public void deleteCampaign(Admincreatecampaign storedCampaign) {

    admincreatecampaignrepo.delete(storedCampaign);
  }



  public void updateCampaign(Admincreatecampaign storedCampaign) {


    admincreatecampaignrepo.save(storedCampaign);

  }

}
