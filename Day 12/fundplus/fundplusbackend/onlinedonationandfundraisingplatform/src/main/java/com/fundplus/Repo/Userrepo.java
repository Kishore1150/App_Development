package com.fundplus.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fundplus.Model.User;


public interface Userrepo  extends JpaRepository<User,Integer>{


  User findByEmail(String email);
Optional<User> findUserByEmail(String email);
  User findById(String id);


}
