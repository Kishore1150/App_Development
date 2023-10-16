package com.fundplus.Microservices.Serviceimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fundplus.Microservices.Model.Admincreatecampaign;
import com.fundplus.Microservices.Repository.Admincreatecampaignrepo;

@Service
public class Admincreatecampaignserviceimpl {


  @Autowired
  private Admincreatecampaignrepo admincreatecampaignrepo;
  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }
  public Admincreatecampaign findCampaignById(String id) {
    return admincreatecampaignrepo.findCampaignById(id);
  }

  public ResponseEntity<Admincreatecampaign> saveAdmincampaigns(Admincreatecampaign campaign) {

    ResponseEntity<Admincreatecampaign> responseEntity = restTemplate().postForEntity(
        "http://localhost:8081/api/fundplus/adminaddcampaigns",
        campaign,
        Admincreatecampaign.class);

    return responseEntity;
  }
public List<Admincreatecampaign> getAllCampaignsList() {
    ResponseEntity<List<Admincreatecampaign>> responseEntity = restTemplate().exchange(
            "http://localhost:8081/getalladmincampaigns",
            HttpMethod.GET,
            null,
            new ParameterizedTypeReference<List<Admincreatecampaign>>() {});

    return responseEntity.getBody();
}

public ResponseEntity<String> deleteCampaign(String id) {

  Map<String, String> uriVariables = new HashMap<>();
  uriVariables.put("id", id);

  ResponseEntity<String> responseEntity = restTemplate().exchange(
      "http://localhost:8081/deletecampaign/{id}",
      HttpMethod.DELETE,
      null,
      String.class,
      uriVariables);

  return responseEntity;
}

 public ResponseEntity<String> updateCampaign(Admincreatecampaign admincreatecampaign) {
  String microserviceUrl = "http://localhost:8081/updatecampaign/" + admincreatecampaign.getId();

  HttpHeaders headers = new HttpHeaders();
  headers.setContentType(MediaType.APPLICATION_JSON);
  HttpEntity<Admincreatecampaign> requestEntity = new HttpEntity<>(admincreatecampaign, headers);

  ResponseEntity<String> responseEntity = restTemplate().exchange(
      microserviceUrl,
      HttpMethod.PUT,
      requestEntity,
      String.class
  );

  return responseEntity;
}



}










