#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>
#include <string> 
#include <stdio.h>
#include <iostream>
#include <sstream>
#include <SPI.h>

const char* ssid = "redeWifiX";
const char* password = "senhaDaWifiAqui";
ESP8266WebServer server(80);

void setup() {
  pinMode(D1, OUTPUT); 
  digitalWrite(D1, LOW); 
  // put your setup code here, to run once:
  Serial.begin(9600);
  SPI.begin(); // Init SPI bus
  //Modulo wifi
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("");
  // Aguarda Conexão e Informa IP
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Rede WiFi: ");
  Serial.println(ssid);
  Serial.print("Endereço IP: ");
  Serial.println(WiFi.localIP());
  delay(100);
  server.on("/", handle_OnConnect);
  server.on("/ligar_led", handle_ligar_led);
  server.on("/desligar_led", handle_desligar_led);
  server.onNotFound(handle_NotFound);
  server.begin();
  Serial.println("Servidor HTTP iniciado!");

}

void loop() {
  // put your main code here, to run repeatedly:
  server.handleClient();  
}

void handle_OnConnect() {
  server.send(200, "text/html", SendHTML());
}

void handle_ligar_led() {
  digitalWrite(D1, HIGH);
}

void handle_desligar_led() {
  digitalWrite(D1, LOW);
}

void handle_NotFound() {
  server.send(404, "text/plain", "Not found");
}

String SendHTML() {
  String ptr = "<!DOCTYPE html>";
        ptr += "<html lang='en'>";
        ptr += "<head>";
        ptr += "<meta charset='UTF-8'>";
        ptr += "<meta http-equiv='X-UA-Compatible' content='IE=edge'>";
        ptr += "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
        ptr += "<meta http-equiv='refresh' content='4'>";
        ptr += "<title>Document</title>";
        ptr += "<style>";
        ptr += ".containerGeral {";
        ptr += "text-align: center;";
        ptr += "}";
        ptr += ".button1 {";
        ptr += "background-color: #000099;";
        ptr += "color: #ffffff;";
        ptr += "width: 200px;";
        ptr += "height: 80px;";
        ptr += "margin: 10px;";
        ptr += "}";
        ptr += ".button2 {";
        ptr += "background-color: #990000;";
        ptr += "color: #ffffff;";
        ptr += "width: 200px;";
        ptr += "height: 80px;";
        ptr += "margin: 10px;";
        ptr += "}";
        ptr += "</style>";
        ptr += "</head>";
        ptr += "<body>";
        ptr += "<div class='containerGeral'>";
        ptr += "<h1>Controle de Led pelo Wifi</h1>";
        ptr += "<button class='button1' onclick='ligarLed()'>Ligar Led</button>";
        ptr += "<button class='button2' onclick='desligarLed()'>Desligar Led</button>";
        ptr += "</div>";
        ptr += "<script>";
        ptr += "function ligarLed() { fetch('http://192.168.1.13/ligar_led')}";   
        ptr += "function desligarLed() {fetch('http://192.168.1.13/desligar_led')}";        
        ptr += "</script>";
        ptr += "</body>";
        ptr += "</html>";
  return ptr;
}
