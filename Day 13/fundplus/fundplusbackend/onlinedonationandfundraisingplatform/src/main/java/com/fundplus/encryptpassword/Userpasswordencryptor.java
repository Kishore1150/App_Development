package com.fundplus.encryptpassword;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Userpasswordencryptor {
  private static BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

  public static String encryptPassword(String password) {
    return passwordEncoder.encode(password);
  }

  public static boolean matchPassword(String password, String encryptedPassword) {
    return passwordEncoder.matches(password, encryptedPassword);
  }

}
