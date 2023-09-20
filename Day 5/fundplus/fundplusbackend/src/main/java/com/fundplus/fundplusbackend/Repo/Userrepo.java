package com.fundplus.fundplusbackend.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fundplus.fundplusbackend.Model.User;


public interface Userrepo  extends JpaRepository<User,Integer>{


  User findByEmail(String email);


}
