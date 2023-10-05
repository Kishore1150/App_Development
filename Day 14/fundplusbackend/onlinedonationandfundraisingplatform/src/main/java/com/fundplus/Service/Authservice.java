package com.fundplus.Service;


import com.fundplus.Dto.request.Authenticationrequest;
import com.fundplus.Dto.request.Userregisterrequest;
import com.fundplus.Dto.response.Authenticationresponse;

public interface Authservice {
  boolean userRegistration(Userregisterrequest request);

  Authenticationresponse userAuthentication(Authenticationrequest request);

}
