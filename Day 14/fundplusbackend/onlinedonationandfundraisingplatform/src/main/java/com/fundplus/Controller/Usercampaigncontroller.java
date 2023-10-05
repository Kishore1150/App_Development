package com.fundplus.Controller;

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
import com.fundplus.Model.Usercampaigns;
import com.fundplus.ServiceImpl.Usercampaignserviceimpl;

@RestController
@RequestMapping(Api.AUTH)
public class Usercampaigncontroller {


  @Autowired
  private Usercampaignserviceimpl usercampaignservice;

  @PostMapping("/savecampaigns")
  public ResponseEntity<?> userSaveCampaigns(@RequestBody Usercampaigns campaigns)
  {
    boolean response= usercampaignservice.saveUsercampaigns(campaigns);
    if(response)
    {

      return ResponseEntity.ok().body("Campaign created successfully");
    }
    else
    {
      return ResponseEntity.badRequest().body("Unable to create campaign");
    }

  }

  @GetMapping("/getallcampaigns")
  public List<Usercampaigns> getAllCampaigns()
  {
      return usercampaignservice.getAllCampaignsList();
  }

  @DeleteMapping("/deletecampaign/{id}")
  public ResponseEntity<?> deleteUserById(@PathVariable String id)
  {
     Usercampaigns  storedCampaign=usercampaignservice.findCampaignById(id);
    if(storedCampaign==null)
    {
      return new ResponseEntity<>("Campaign not exist with this "+id+"!", HttpStatus.NOT_FOUND);
    }
    else
    {
       usercampaignservice.deleteCampaign(storedCampaign);
    }


    return new ResponseEntity<>("User with id "+id+" is deleted successfully" ,HttpStatus.OK);
  }


    @PutMapping("/updatecampaign/{id}")
  public ResponseEntity<?> updateCampaign(@PathVariable String id) {
    Usercampaigns storedCampaign = usercampaignservice.findCampaignById(id);
    if (storedCampaign == null) {
      return new ResponseEntity<>("Campaign not found", HttpStatus.NOT_FOUND);
    }  else {
      usercampaignservice.updateCampaign(storedCampaign);
    }

    return ResponseEntity.ok().body("Campaign updated successfully");
  }





}
