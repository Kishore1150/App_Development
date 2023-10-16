package com.fundplus.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fundplus.Model.Usercarddetails;
import com.fundplus.Repo.Usercardetailsrepo;

@Service
public class Usercarddetailsserviceimpl {


  @Autowired
  private Usercardetailsrepo usercardetailsrepo;
  public List<Usercarddetails> getAllUserCardDetails() {
    return usercardetailsrepo.findAll();
  }
  // public Usercarddetails findUserCardDetailsById(String id) {
  //   return usercardetailsrepo(id);
  // }
  public void updateUserCardDetails(Usercarddetails storedUsercarddetails) {
  }

}
