package com.fundplus.ServiceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fundplus.Dto.Userdto;
import com.fundplus.Model.User;
import com.fundplus.Repo.Userrepo;
import com.fundplus.encryptpassword.Userpasswordencryptor;




@Service
public class Userserviceimpl {

  @Autowired
  private Userrepo userrepo;

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

  public User findUserById(String id)
  {
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

}
