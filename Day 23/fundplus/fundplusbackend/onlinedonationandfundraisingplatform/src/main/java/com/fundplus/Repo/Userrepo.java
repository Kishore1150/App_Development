package com.fundplus.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fundplus.Model.User;


@Repository
public interface Userrepo  extends JpaRepository<User,String>{


  User findUserByEmail(String email);
Optional<User> findByEmail(String email);
  User findUserById(String id);


}
