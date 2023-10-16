package com.fundplus.Controller;

import java.lang.reflect.Field;
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
@RequestMapping(Api.USER)
public class Usercampaigncontroller {


  @Autowired
  private Usercampaignserviceimpl usercampaignservice;

  @PostMapping("/savecampaigns")
  public ResponseEntity<?> userSaveCampaigns(@RequestBody Usercampaigns campaigns)
  {
    boolean response=usercampaignservice.saveUsercampaigns(campaigns);
    if(response)
    {

      return ResponseEntity.ok().body("Campaign created successfully");
    }
    else
    {
      return ResponseEntity.badRequest().body("Unable to create campaign");
    }

  }

  @GetMapping("/getcampaign/{id}")
  public Usercampaigns getCampaign(@PathVariable String id)
  {
    return usercampaignservice.getCampaignById(id);
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
  public ResponseEntity<?> updateUserDetailsById(@PathVariable String id, @RequestBody Usercampaigns usercampaigns) {
    Usercampaigns storedCampaigns = usercampaignservice.findCampaignById(id);

    if (storedCampaigns == null) {
      return new ResponseEntity<>("Campaigns not found", HttpStatus.NOT_FOUND);
    } else {
      updateUserFields(storedCampaigns, usercampaigns);
      usercampaignservice.updateCampaign(storedCampaigns);
    }

    return new ResponseEntity<>("Campaign details updated successfully", HttpStatus.OK);
  }

  private void updateUserFields(Usercampaigns storedUserCampaigns, Usercampaigns newUserCampaigns) {
    Class<?> userCampaignClass = Usercampaigns.class;
    Field[] fields = userCampaignClass.getDeclaredFields();

    for (Field field : fields) {
      try {
        field.setAccessible(true);
        Object newValue = field.get(newUserCampaigns);
        if (newValue != null) {
          field.set(storedUserCampaigns, newValue);
        }
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      }
    }
  }





}
