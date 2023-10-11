package com.fundplus.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fundplus.Dto.Userdto;
import com.fundplus.Model.User;
import com.fundplus.Model.Usercampaigns;
import com.fundplus.Model.Usercarddetails;
import com.fundplus.Repo.Usercampaignsrepo;
import com.fundplus.Repo.Usercardetailsrepo;
import com.fundplus.Repo.Userrepo;
import com.fundplus.encryptpassword.Userpasswordencryptor;

@Service
public class Userserviceimpl {

  @Autowired
  private Userrepo userrepo;

  @Autowired
  private Usercardetailsrepo usercarddetailsrepo;

  @Autowired
  private Usercampaignsrepo usercampaignsrepo;

  public User findUser(String email) {
    User user = userrepo.findUserByEmail(email);
    return user;
  }

  public void signupUser(User user) {
    // String id = UUID.randomUUID().toString();
    // user.setId(id);
    String password = Userpasswordencryptor.encryptPassword(user.getPassword());
    user.setPassword(password);
    userrepo.save(user);
  }

  public Userdto loginUser(User user) {

    User storedUser = userrepo.findUserByEmail(user.getEmail());

    if (storedUser != null) {
      if (Userpasswordencryptor.matchPassword(user.getPassword(), storedUser.getPassword())) {

        Userdto userdto = new Userdto();

        BeanUtils.copyProperties(storedUser, userdto, "password");

        return userdto;
      }
    }

    return null;

  }

  public void updateUser(User user, String password) {
    String updatedpassword = Userpasswordencryptor.encryptPassword(password);
    user.setPassword(updatedpassword);
    userrepo.save(user);

  }

  public void uploaduserImage(User user, String image) {

    user.setUserImage(image);
    userrepo.save(user);

  }

  public void uploadUserProfileImage(User user, String userprofileimage) {
    user.setProfileImage(userprofileimage);
    userrepo.save(user);
  }

  public User findUserById(String id) {
    return userrepo.findUserById(id);
  }

  public void saveUser(User storedUser) {

    userrepo.save(storedUser);
  }

  public List<User> getAllUsers() {
    return (List<User>) userrepo.findAll();
  }

  public void deleteUser(User storedUser) {

    userrepo.delete(storedUser);
  }

  public void updateUserDetails(User storedUser) {
    userrepo.save(storedUser);
  }

  public boolean updateUserCardDetails(Usercarddetails usercarddetails, String id) {

    User storedUser = userrepo.findUserById(id);
    if (storedUser == null) {
      return false;
    } else {
      List<Usercarddetails> oldusercarddetails = storedUser.getUsercarddetails();
      if (oldusercarddetails.size() > 3) {
        return false;
      }
      for (Usercarddetails oldusercarddetails2 : oldusercarddetails) {
        if (oldusercarddetails2.getCardNumber().equals(usercarddetails.getCardNumber()))
          return false;
      }
      usercarddetailsrepo.save(usercarddetails);
      oldusercarddetails.add(usercarddetails);
      storedUser.setUsercarddetails(oldusercarddetails);
      userrepo.save(storedUser);
      return true;

    }

  }

  public boolean updateUserCampaignDetails(Usercampaigns usercampaigns, String id) {

    User storedUser = userrepo.findUserById(id);
    if (storedUser == null) {
      return false;
    } else {
      List<Usercampaigns> oldusercampaigndetails = storedUser.getUsercampaigns();


      usercampaignsrepo.save(usercampaigns);
      oldusercampaigndetails.add(usercampaigns);
      storedUser.setUsercampaigns(oldusercampaigndetails);
      userrepo.save(storedUser);
      return true;

    }

  }

}
