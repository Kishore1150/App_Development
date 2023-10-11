package com.fundplus.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fundplus.Model.User;


public interface Userrepo  extends JpaRepository<User,String>{


  User findUserByEmail(String email);
Optional<User> findByEmail(String email);
  User findUserById(String id);


}
