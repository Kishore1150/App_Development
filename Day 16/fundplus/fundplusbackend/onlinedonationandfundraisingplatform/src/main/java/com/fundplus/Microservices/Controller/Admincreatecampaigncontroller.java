package com.fundplus.Microservices.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fundplus.Constant.Api;
import com.fundplus.Microservices.Model.Admincreatecampaign;
import com.fundplus.Microservices.Serviceimpl.Admincreatecampaignserviceimpl;

@RestController
@RequestMapping(Api.ADMIN)
public class Admincreatecampaigncontroller {

  @Autowired
  private Admincreatecampaignserviceimpl admincreatecampaignserviceimpl;

  // @PostMapping("/adminsavecampaigns")
  // public ResponseEntity<?> Adminsavecampaigns(@RequestBody Admincreatecampaign
  // campaigns) {
  // ResponseEntity<Admincreatecampaign> response =
  // admincreatecampaignserviceimpl.saveCreateCampaign(campaigns);

  // return ResponseEntity.badRequest().body("Campaign created successfully");

  // }

  // }

  @PostMapping("/adminaddcampaigns")
  public ResponseEntity<Admincreatecampaign> admincreateCampaign(@RequestBody Admincreatecampaign createcampaign) {
    return admincreatecampaignserviceimpl.saveAdmincampaigns(createcampaign);
  }

  @GetMapping("/getallcampaigns")
  public List<Admincreatecampaign> getAllCampaigns() {
    return admincreatecampaignserviceimpl.getAllCampaignsList();
  }

  @DeleteMapping("/deletecampaign/{id}")
  public ResponseEntity<?> deleteUserById(@PathVariable String id)
  {
  Admincreatecampaign
  storedCampaign=admincreatecampaignserviceimpl.findCampaignById(id);
  if(storedCampaign==null)
  {
  return new ResponseEntity<>("Campaign not exist with this "+id+"!",
  HttpStatus.NOT_FOUND);
  }
  else
  {
   admincreatecampaignserviceimpl.deleteCampaign(storedCampaign.getId());
  }


  return new ResponseEntity<>("Campaign with "+id+" is deleted successfully"
  ,HttpStatus.OK);
  }

  // @PutMapping("/updatecampaign/{id}")
  // public ResponseEntity<?> updateCampaign(@PathVariable String id) {
  // Admincreatecampaign storedCampaign =
  // admincreatecampaignserviceimpl.findCampaignById(id);
  // if (storedCampaign == null) {
  // return new ResponseEntity<>("Campaign not found", HttpStatus.NOT_FOUND);
  // } else {
  // admincreatecampaignserviceimpl.updateCampaign(storedCampaign);
  // }

  // return ResponseEntity.ok().body("Campaign updated successfully");
  // }

}
