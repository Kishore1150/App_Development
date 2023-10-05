package com.fundplus.Controller;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fundplus.Dto.Userdto;
import com.fundplus.Model.User;
import com.fundplus.ServiceImpl.Userserviceimpl;
import com.fundplus.encryptpassword.Userpasswordencryptor;


@RestController
@CrossOrigin(value = "*")
@RequestMapping("/fundplus")
public class Usercontroller {

  @Autowired
  private Userserviceimpl userservice;

  @GetMapping("/home")
  public String home() {
    return "Welcome to fundplus";
  }

  @GetMapping("/getusers")
  public List<User> getAllUsers()
  {
        return userservice.getAllUsers();
  }

  @GetMapping("/getuser/{userId}")
  public User findUserById(@PathVariable String userId)
  {
    User storedUser=userservice.findUserById(userId);
    return storedUser;
  }

  @PostMapping("/signup")
  public ResponseEntity<?> userSignup(@RequestBody User user) {

    User storedUser = userservice.findUser(user.getEmail());

    if (storedUser == null) {
      userservice.signupUser(user);
    } else {
      return new ResponseEntity<>("Signup Failed", HttpStatus.BAD_REQUEST);
    }
    return ResponseEntity.ok().body("Sign up successful");

  }

  @PostMapping("/login")
  public ResponseEntity<?> userLogin(@RequestBody User user) {

    Userdto userdto = new Userdto();
    userdto = userservice.loginUser(user);
    if (userdto == null) {
      return new ResponseEntity<>("Login Failed", HttpStatus.BAD_REQUEST);
    }

    return new ResponseEntity<>(userdto, HttpStatus.OK);

  }

  @PutMapping("/updatepassword")
  public ResponseEntity<?> updatePassword(@RequestBody User user) {
    User storedUser = userservice.findUser(user.getEmail());
    if (storedUser == null) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    } else if (Userpasswordencryptor.matchPassword(user.getPassword(), storedUser.getPassword())) {
      return new ResponseEntity<>("Unable to update!,It's your previous password", HttpStatus.BAD_REQUEST);
    } else {
      userservice.updateUser(storedUser, user.getPassword());
    }

    return ResponseEntity.ok().body("Password updated successfully");
  }

  // @PutMapping("/uploaduserimage")
  // public ResponseEntity<?> uploadUserImage(@RequestParam("email") String email,
  //     @RequestParam("userImage") String userImage) {
  //   try {
  //     byte[] image = userImage.getBytes();
  //     User storedUser = userservice.findUser(email);

  //     if (storedUser == null) {
  //       return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
  //     } else {
  //       userservice.uploaduserImage(storedUser, image);
  //       return new ResponseEntity<>("Image uploaded successfully", HttpStatus.ACCEPTED);
  //     }
  //   } catch (Exception ex) {
  //     return new ResponseEntity<>("Error uploading image: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
  //   }
  // }

  @PostMapping("/updateuserprofile/{id}")
  public ResponseEntity<String> updateUserProfile(@PathVariable String id, @RequestParam("file") MultipartFile file) {
    try {
      User storedUser = userservice.findUserById(id);
      if (storedUser == null) {
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
      } else
        storedUser.setProfileImage(file.getBytes());
      userservice.saveUser(storedUser);
      return new ResponseEntity<>("Image uploaded successfully", HttpStatus.OK);

    } catch (IOException e) {
      return new ResponseEntity<>("Could not upload the image", HttpStatus.INTERNAL_SERVER_ERROR);
    } catch (Exception e) {
      return new ResponseEntity<>("User not exist with id:" + id, HttpStatus.NOT_FOUND);
    }

  }

  @DeleteMapping("/deleteusers/{id}")
  public ResponseEntity<?> deleteUserById(@PathVariable String id)
  {

    User storedUser=userservice.findUserById(id);
    if(storedUser==null)
    {
      return new ResponseEntity<>("User not exist with this "+id+"!", HttpStatus.NOT_FOUND);
    }
    else
    {
       userservice.deleteUser(storedUser);
    }


    return new ResponseEntity<>("User with id "+id+" is deleted successfully" ,HttpStatus.OK);
  }




}
