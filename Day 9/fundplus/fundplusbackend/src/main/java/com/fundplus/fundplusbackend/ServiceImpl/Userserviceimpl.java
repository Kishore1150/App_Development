package com.fundplus.fundplusbackend.ServiceImpl;

import java.util.Base64;
import java.util.UUID;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fundplus.fundplusbackend.Dto.Userdto;
import com.fundplus.fundplusbackend.Model.User;
import com.fundplus.fundplusbackend.Repo.Userrepo;
import com.fundplus.fundplusbackend.Service.Userservice;
import com.fundplus.fundplusbackend.encryptpassword.Userpasswordencryptor;




@Service
public class Userserviceimpl implements Userservice {

  @Autowired
  private Userrepo userrepo;

  public User findUser(String email) {
    User user = userrepo.findByEmail(email);
    return user;
  }

  public void signupUser(User user) {
    String id = UUID.randomUUID().toString();
    user.setId(id);
    String password = Userpasswordencryptor.encryptPassword(user.getPassword());
    user.setPassword(password);
    userrepo.save(user);
  }

  public Userdto loginUser(User user) {

    User storedUser = userrepo.findByEmail(user.getEmail());

    if (storedUser != null) {
      if (Userpasswordencryptor.matchPassword(user.getPassword(), storedUser.getPassword())) {

        Userdto userdto = new Userdto();

        BeanUtils.copyProperties(storedUser, userdto, "password");

        return userdto;
      }
    }

    return null;

  }


  public void updateUser(User user,String password)
  {
    String updatedpassword=Userpasswordencryptor.encryptPassword(password);
    user.setPassword(updatedpassword);
    userrepo.save(user);

  }

  public void uploaduserImage(User user,byte[] image) {

    user.setUserImage(image);
    userrepo.save(user);

  }

}
