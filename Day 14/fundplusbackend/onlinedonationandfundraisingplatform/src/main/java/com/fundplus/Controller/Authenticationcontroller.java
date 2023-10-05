package com.fundplus.Controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fundplus.Constant.Api;
import com.fundplus.Dto.request.Authenticationrequest;
import com.fundplus.Dto.request.Userregisterrequest;
import com.fundplus.Dto.response.Authenticationresponse;
import com.fundplus.Model.User;
import com.fundplus.Service.Authservice;
import com.fundplus.ServiceImpl.Userserviceimpl;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class Authenticationcontroller {


    @Autowired
    private  Authservice authService;
    @Autowired
    private Userserviceimpl userservice;

    @GetMapping("/home")
    public String Home()
    {
        return "Welcome user";
    }

    @PostMapping("/usersignup")
    public ResponseEntity<String> register(@RequestBody Userregisterrequest request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("User already Signed up!");
    }

    @PostMapping("/userlogin")
    public ResponseEntity<Authenticationresponse> authenticate(@RequestBody Authenticationrequest request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }

     @PutMapping("/uploaduserimage")
  public ResponseEntity<?> uploadUserImage(@RequestParam("email") String email,
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
    @GetMapping("/getuser/{userId}")
  public User findUserById(@PathVariable String userId)
  {
    User storedUser=userservice.findUserById(userId);
    return storedUser;
  }

   @GetMapping("/getusers")
  public List<User> getAllUsers()
  {
        return userservice.getAllUsers();
  }

}
