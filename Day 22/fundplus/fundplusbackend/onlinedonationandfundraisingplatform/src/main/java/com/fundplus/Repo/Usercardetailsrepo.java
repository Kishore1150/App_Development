package com.fundplus.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fundplus.Model.Usercarddetails;

@Repository
public interface Usercardetailsrepo extends JpaRepository<Usercarddetails,String>{
}
