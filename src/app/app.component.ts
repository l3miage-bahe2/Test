import { Component } from '@angular/core';
import { Node } from '.components/models/node.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  data:Node[] = [
    {
      "item": "Malware Infection",ri
      "type": "threat",
      "detected": [
        {
          "item": "AV Malware, the DNS server replied with a sinkhole address, infected host resolving a CnC domain"
        },
        {
          "item": "AV Policy violation, password in cleartext detected in HTTP traffic"
        },
        {
          "item": "AV Policy violation, vulnerable Java version detected"
        },
        {
          "item": "AV Network scan, local host scanning port 445/TCP"
        },
        {
          "item": "Connection to Dangerous Addresses"
        },
        {
          "item": "WannaCry connection to Killswitch Domain"
        }
      ],
      "affected": [],
      "impact": [],
      "recommendation": [],
      "check": false,
      "expand": false,
    },
    {
      "item": "Ransonware infection",
      "type": "threat",
      "detected": [
        {
          "item": "WannaCry connection to Killswitch Domain"
        }
      ],
      "affected": [],
      "impact": [],
      "recommendation": [],
      "check": false,
      "expand": false
    },
    {
      "item": "Trojan infection",
      "type": "threat",
      "detected": [
        {
          "item": "AV Malware, trojan Sality detected"
        }
      ],
      "affected": [],
      "impact": [],
      "recommendation": [],
      "check": false,
      "expand": false
    }
  ]

}
