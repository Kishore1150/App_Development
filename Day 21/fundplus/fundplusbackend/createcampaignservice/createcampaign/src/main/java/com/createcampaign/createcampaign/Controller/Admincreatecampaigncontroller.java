package com.createcampaign.createcampaign.Controller;

import java.lang.reflect.Field;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.createcampaign.createcampaign.Model.Admincreatecampaign;
import com.createcampaign.createcampaign.Serviceimpl.Admincreatecampaignserviceimpl;

@RestController
@CrossOrigin(value = "*")
public class Admincreatecampaigncontroller {

  @Autowired
  private Admincreatecampaignserviceimpl admincreatecampaignserviceimpl;


  @PostMapping("api/fundplus/adminaddcampaigns")
  public ResponseEntity<Admincreatecampaign> admincreateCampaign(@RequestBody Admincreatecampaign createcampaign) {
    return admincreatecampaignserviceimpl.saveAdmincampaigns(createcampaign);
  }

  @GetMapping("/getalladmincampaigns")
  public List<Admincreatecampaign> getAllCampaigns() {
    return admincreatecampaignserviceimpl.getAllCampaignsList();
  }

  @DeleteMapping("/deletecampaign/{id}")
  public ResponseEntity<?> deleteUserById(@PathVariable String id) {
    Admincreatecampaign storedCampaign = admincreatecampaignserviceimpl.findCampaignById(id);
    if (storedCampaign == null) {
      return new ResponseEntity<>("Campaign not exist with this " + id + "!", HttpStatus.NOT_FOUND);
    } else {
      admincreatecampaignserviceimpl.deleteCampaign(storedCampaign);
    }

    return new ResponseEntity<>("Campaign with " + id + " is deleted successfully", HttpStatus.OK);
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

  @PutMapping("/updatecampaign/{id}")
  public ResponseEntity<?> updateCampaign(@PathVariable String id, @RequestBody Admincreatecampaign admincreatecampaign) {
    Admincreatecampaign storedCampaign = admincreatecampaignserviceimpl.findCampaignById(id);

    if (storedCampaign == null) {
      return new ResponseEntity<>("Campaign not found", HttpStatus.NOT_FOUND);
    } else {
      updateCampaignFields(storedCampaign,admincreatecampaign );
      admincreatecampaignserviceimpl.updateCampaign(storedCampaign);
    }

    return new ResponseEntity<>("Campaign details updated successfully", HttpStatus.OK);
  }

    private void updateCampaignFields(Admincreatecampaign storedUser, Admincreatecampaign newUser) {
    Class<?> userClass = Admincreatecampaign.class;
    Field[] fields = userClass.getDeclaredFields();

    for (Field field : fields) {
      try {
        field.setAccessible(true);
        Object newValue = field.get(newUser);
        if (newValue != null) {
          field.set(storedUser, newValue);
        }
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      }
    }
  }

}
