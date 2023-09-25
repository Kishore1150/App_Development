package com.fundplus.fundplusbackend.Controller;

import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.fundplus.fundplusbackend.Dto.Userdto;
import com.fundplus.fundplusbackend.Model.User;
import com.fundplus.fundplusbackend.ServiceImpl.Userserviceimpl;
import com.fundplus.fundplusbackend.encryptpassword.Userpasswordencryptor;

@Controller
@CrossOrigin(value = "*")
@RequestMapping("/fundplus")
public class Usercontroller {

  @Autowired
  private Userserviceimpl userservice;

  @GetMapping("/home")
  public String home() {
    return "Welcome to fundplus";
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
  public ResponseEntity<?> updatepassword(@RequestBody User user) {
    User storedUser = userservice.findUser(user.getEmail());
    if (storedUser == null) {
      return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
    } else if (Userpasswordencryptor.matchPassword(user.getPassword(),storedUser.getPassword())) {
      return new ResponseEntity<>("Unable to update!,It's your previous password", HttpStatus.BAD_REQUEST);
    } else {
      userservice.updateUser(storedUser, user.getPassword());
    }

    return ResponseEntity.ok().body("Password updated successfully");
  }

  @PutMapping("/uploaduserimage")
  public ResponseEntity<?> uploaduserImage(@RequestParam("email") String email,
      @RequestParam("userImage") String userImage) {
    try {
      byte[] image = userImage.getBytes();
      User storedUser = userservice.findUser(email);

      if (storedUser == null) {
        return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
      } else {
        userservice.uploaduserImage(storedUser, image);
        return new ResponseEntity<>("Image uploaded successfully", HttpStatus.ACCEPTED);
      }
    } catch (Exception ex) {
      return new ResponseEntity<>("Error uploading image: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
