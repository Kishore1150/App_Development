package com.fundplus.Controller;

import java.lang.reflect.Field;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fundplus.Constant.Api;
import com.fundplus.Model.User;
import com.fundplus.Model.Usercarddetails;
import com.fundplus.ServiceImpl.Usercarddetailsserviceimpl;

@RestController
@RequestMapping(Api.AUTH)
public class Usercarddetailscontroller {



  @Autowired
  private Usercarddetailsserviceimpl usercarddetailsserviceimpl;


  @GetMapping("/getallusercarddetails")
  public List<Usercarddetails> getAllUserCardDetails()
  {
    return usercarddetailsserviceimpl.getAllUserCardDetails();
  }


  @PostMapping("/saveusercarddetails")
  public ResponseEntity<?> saveUserCardDetails()
  {


    return new ResponseEntity<>("User card details saved successfully",HttpStatus.OK);
  }

  // @PutMapping("/updateusercarddetailsbyId/{id}")
  // public ResponseEntity<?> updateUserDetailsById(@PathVariable String id, @RequestBody Usercarddetails usercarddetails) {
  //   Usercarddetails storedUsercarddetails = usercarddetailsserviceimpl.findUserCardDetailsById(id);

  //   if (storedUsercarddetails == null) {
  //     return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
  //   } else {
  //     updateUserFields(storedUsercarddetails, usercarddetails);
  //     usercarddetailsserviceimpl.updateUserCardDetails(storedUsercarddetails);
  //   }

  //   return new ResponseEntity<>("User details updated successfully", HttpStatus.OK);
  // }

  private void updateUserFields(Usercarddetails storedUsercarddetails, Usercarddetails newUser) {
    Class<?> userClass = Usercarddetails.class;
    Field[] fields = userClass.getDeclaredFields();

    for (Field field : fields) {
      try {
        field.setAccessible(true);
        Object newValue = field.get(newUser);
        if (newValue != null) {
          field.set(storedUsercarddetails, newValue);
        }
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      }
    }
  }











}
